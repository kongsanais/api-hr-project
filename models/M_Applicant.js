const mongoose = require('mongoose')
const validator = require('validator')

const applicantSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    th_prefix: {
        type: String,
        trim:true
    },
    th_firstname: {
        type: String,
        trim:true,
        minlength: 4
    },
    th_lastname: {
        type: String,
        trim:true,
        minlength: 4
    },
    eng_prefix: {
        type: String,
        trim:true
    },
    eng_firstname: {
        type: String,
        trim:true,
        minlength: 4
    },
    eng_lastname: {
        type: String,
        trim:true,
        minlength: 4
    },
    nationality: {
        type: String,
        trim:true
    },
    phone_number: {
        type: String,
        trim:true
    },
    phone_number_famaily:{
        type: String,
        trim:true
    },
    person_relationship: {
        type: String,
        trim:true
    },
    eng_address: {
        type: String,
        trim:true
    },
    date_birthday: {
        type: Date
    },
    age:{
        type: String,
        default: 0
    },
    imageURL:{
    },
    resumeURL:{
    },
    job_level:{
        type: String 
    },
    job_position:{
        type: String
    },
    job_salary:{
        type: String 
    }
    
})

const Applicant = mongoose.model('Applicant', applicantSchema ,'applicants')
module.exports = Applicant