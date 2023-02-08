const express = require('express')
const router = express.Router()
const { getAutos, setAutos, updateAutos, deleteAutos } = require('../controllers/autoController')

router.route('/').get(getAutos).post(setAutos)
router.route('/:id').delete(deleteAutos).put(updateAutos)

// router.get('/', getAutos)
// router.post('/', setAutos)
// router.put('/:id', updateAutos)
// router.delete('/:id', deleteAutos)

module.exports = router