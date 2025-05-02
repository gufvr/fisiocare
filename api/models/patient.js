const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: true,
    unique: true,
  },
  patientName: {
    type: String,
    required: true
  },
  joiningDate: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true,
  },
  activePatient: {
    type: Boolean,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Patient = mongoose.model("Patient", patientSchema)

module.exports = Patient