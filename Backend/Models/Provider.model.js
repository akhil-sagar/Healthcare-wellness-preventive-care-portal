const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const ProviderSchema = new Schema({
    name:{
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true,
        },
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    patients:{
        type: [{ type: String, ref: 'User' }],
    },
}, { timestamps: true });
const Provider = mongoose.model('Provider', ProviderSchema);

module.exports = Provider;