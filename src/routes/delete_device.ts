import express from 'express';
import { Device } from '../entities/Device';

const router = express.Router();

router.delete("/api/device/:deviceId", async(req, res) => {
  const {deviceId} = req.params;

  const response = await Device.delete(parseInt(deviceId));

  return res.json(response);

})

export {
  router as deleteDeviceRouter
}