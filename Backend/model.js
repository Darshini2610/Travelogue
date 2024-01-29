
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        minlength: 5
    },
    image: {
        type: Buffer,
        required: true
    }
}, {
    timestamps: true,
});

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;

