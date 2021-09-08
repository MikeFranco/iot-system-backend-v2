import { createConnection } from 'typeorm'
import express from 'express';
import { Device } from './entities/Device';
import { createDeviceRouter } from './routes/create_device';
import { deleteDeviceRouter } from './routes/delete_device';
import { fetchDeviceRouter } from './routes/fetch_device';

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: "user",
      password: "password",
      database: "devices",
      entities: [Device],
      synchronize: true
    })
    console.log('connected to postgres');
    
    app.use(express.json());
    app.use(createDeviceRouter);
    app.use(deleteDeviceRouter);
    app.use(fetchDeviceRouter);

    app.listen(8080, () => {
      console.log('running on port 8080');
    })
  } catch (error){
    console.log(error);
    throw new Error('Unable to connect to db')
  }
}

main()