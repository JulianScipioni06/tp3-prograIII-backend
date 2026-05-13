const { Router } = require('express')
const {
    getUsuarios,
    getUsuarioById,
    loginUsuario,
    registrarUsuario
} = require('../controllers/usuariosController')

const rutas = Router()

rutas.get('/', getUsuarios)
rutas.get('/:id', getUsuarioById)
rutas.post('/login', loginUsuario)
rutas.post('/registro', registrarUsuario)

module.exports = rutas