const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor teclea el nombre del usuario']
    },
    email:{
        type: String,
        required: [true, 'Por favor teclea el email del usuario'],
        unique: true
    },
    contraseña: {
        type: String,
        required: [true, 'Por favor teclea un password']
    }

},
    {   
    timestamps: true
    })

module.exports = mongoose.model('User', userSchema)