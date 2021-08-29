import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema({
  "Vin": {
    "type": "String"
  },
  "LicencePlate": {
    "type": "String"
  },
  "Driver": {
    "type": "String"
  },
  "MMY": {
    "type": "String"
  },
  "CustomerName": {
    "type": "String"
  },
  "Office": {
    "type": "String"
  },
  "Status": {
    "ignition": {
      "type": "String"
    },
    "speed": {
      "type": "Number"
    },
    "location": {
      "lat": {
        "type": "Number"
      },
      "lon": {
        "type": "Number"
      }
    }
  }
})

const VehicleModel = mongoose.model('VehicleModel', vehicleSchema);

export default VehicleModel;