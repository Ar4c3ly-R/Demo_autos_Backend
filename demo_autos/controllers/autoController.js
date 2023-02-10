const asyncHandler = require('express-async-handler')

const Auto = require('../models/autoModel')


const getAutos = asyncHandler(async (req, res) => {
    const autos = await Auto.find()
    res.status(200).json(autos)
})

const setAutos = asyncHandler(async (req, res) => {
    if(!req.body){
        // res.status(400).json({message: 'Por favor teclea una descripcion'})
        res.status(400)
        throw new Error('Por favor teclea una descripcion')
    }

    const auto = await Auto.create({
        marca: req.body.marca,
        modelo:req.body.modelo,
        año:req.body.año,
        color:req.body.color
    })

    res.status(201).json(auto)
})

const updateAutos = asyncHandler(async (req, res) => {

    const auto = await Auto.findById(req.params.id)
    
    if(!auto){
        res.status(400)
        throw new Error('Auto no encontrado')
    }

    const updatedTarea = await Auto.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedTarea)
})

const deleteAutos = asyncHandler(async (req, res) => {

    const auto = await Auto.findById(req.params.id)
    
    if(!auto){
        res.status(400)
        throw new Error('Auto no encontrado')
    }

    const deletedAuto = await Auto.findByIdAndDelete(req.params.id)

    res.status(200).json(req.params.id)
})

module.exports = {
    getAutos,
    setAutos,
    updateAutos,
    deleteAutos
}