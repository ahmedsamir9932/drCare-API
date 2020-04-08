let mongoose = require("mongoose");
const validator = require('validator');

let clinicSupervisorSchema = new mongoose.Schema({
  NID: {
    type: Number,
    required: true,

  },
  Password: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true,

  },
  Clinic: { type: String, ref: 'Clinic' }

});/*end model*/



mongoose.model("clinicsupervisor", clinicSupervisorSchema);