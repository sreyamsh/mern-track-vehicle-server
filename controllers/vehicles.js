import VehicleModel from '../models/vehicleModel.js'
import mongoose from 'mongoose';

export const getVehicles = async (req, res) => {
  try {
    const vehicleList = await VehicleModel.find();
    if (req.query && req.query.count) {
      res.status(200).json(vehicleList.slice(0, req.query.count));
    } else if (req.query && req.query.vin) {
      res.status(200).json(vehicleList.filter((vehicle) => vehicle.Vin === req.query.vin));
    } else {
      res.status(200).json(vehicleList);
    }
  } catch (e) {
    throw new Error(e)
  }
}

export const createVehicle = async (req, res) => {
  const vehicle = req.body;

  const newVehicle = new VehicleModel(vehicle);
  try {
    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (e) {
    throw new Error(e);
  }
}

export const updateVehicle = async (req, res) => {
  const { id: _id } = req.params;
  const vehicle = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

  const updatedVehicle = await VehicleModel.findByIdAndUpdate(_id, { ...vehicle, _id}, {new: true});

  res.json(updatedVehicle);
}

export const deleteVehicle = async (req,res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

  await VehicleModel.findByIdAndRemove(id);

  res.json({message: 'Post deleted successfully'});
}