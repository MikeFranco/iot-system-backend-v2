import express from "express";
import { createQueryBuilder } from 'typeorm';
import { Device } from '../entities/Device';

const router = express.Router();

router.get('/api/devices', async(req,res) => {
  const devices = await createQueryBuilder('device')
    .select('device')
    .from(Device, 'device')
    .getMany()

  return res.json(devices);
})

export { router as fetchDeviceRouter }

