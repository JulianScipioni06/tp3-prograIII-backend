const { Router } = require('express')
const {
    getUsuarios,
    getUsuarioById
} = require('../controllers/usuariosController')

const rutas = Router()

rutas.get('/', getUsuarios)
rutas.get('/:id', getUsuarioById)

module.exports = rutas