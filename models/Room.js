const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({

    name: { type: String, required: true },

    mobile: {type: String, required: true},

    address: {type: String, required: true},

    date: { type: Date, required: false }

}, { timestamps: true }, { collection: 'rooms', versionKey: false })

let RoomModel = mongoose.model('rooms', RoomSchema)

module.exports = RoomModel