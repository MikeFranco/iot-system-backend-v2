import express from 'express';
import { Device } from '../entities/Device';

const router = express.Router();

router.post('/api/device', async(req, res) => {
  const {
    label,
    type,
    manufacturer,
    state,
  } = req.body;

  try {
    const device = Device.create({
      label,
      type,
      manufacturer,
      state,
    });
  
    await device.save();
    return res.json(device);

  } catch(error){
    return res.json(error);
  }


});

export {
  router as createDeviceRouter
}