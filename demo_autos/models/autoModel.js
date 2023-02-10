const mongoose = require('mongoose')

const autoSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    marca:{
        type: String,
        required:[true, 'Por favor ingresa una marca']
    },
    modelo: {
        type: String,
        required:[true, 'Por favor ingresa un modelo']
    },
    año:{
        type: String,
        required:[true, 'Por favor ingresa un año']
    },
    color:{
        type: String,
        required:[true, 'Por favor ingresa un color']
    }
},
    {   
    timestamps: true
    })


module.exports = mongoose.model('Auto', autoSchema)