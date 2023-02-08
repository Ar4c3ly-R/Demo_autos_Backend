const getAutos = (req, res) => {
    res.status(200).json({message:'Obtener autos'})
}
const setAutos = (req, res) => {
    if(!req.body.texto){
        // res.status(400).json({message: 'Por favor teclea una descripcion'})
        res.status(400)
        throw new Error('Por favor teclea una descripcion')
    }
    res.status(201).json({message:'Auto creado'})
}
const updateAutos = (req, res) => {
    res.status(200).json({message:`Auto ${req.params.id} actualizado`})
}
const deleteAutos = (req, res) => {
    res.status(200).json({message:`Auto ${req.params.id} borrado`})
}

module.exports = {
    getAutos,
    setAutos,
    updateAutos,
    deleteAutos
}