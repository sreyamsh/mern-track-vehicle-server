import express from 'express';
import { getVehicles, createVehicle, updateVehicle, deleteVehicle } from '../controllers/vehicles.js'

const router = express.Router();

// all routes in here are starting with /vehicles
router.get('/', getVehicles);
router.post('/', createVehicle);
router.post('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);

export default router;