const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    f_name: {type: String, required: true},
    l_name: {type: String, required: true},
    address: {type: String, required: true},
    cell_number: {type: String, required: true},
    email: {type: String, required: true},
    comments: {type: String, required: true},
    purchased: {type: String, default: null}
}, {
    timestamps: true
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact

