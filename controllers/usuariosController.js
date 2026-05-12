const fs = require('fs').promises

const getUsuarios = async (req, res) => {
    try {
        // Leemos directo el producto.json
        const data = await fs.readFile('./data/usuarios.json', 'utf8')
        const usuarios = JSON.parse(data)

        return res.status(200).json(usuarios)
    } catch (error) {
        console.log(error)
        return res
        .status(500)
        .json({ error: 'No se pudieron obtener los usuarios' })
    }
}

const getUsuarioById = async (req, res) => {
    try {
        // Volvemos a leer el productos.json
        const data = await fs.readFile('./data/usuarios.json', 'utf8')
        const usuarios = JSON.parse(data)

        const { id } = req.params

        // Buscamos el producto específico en el array
        const usuarioID = usuarios.find((u) => u.id === parseInt(id))

        // Si el id no existe, mandamos un 404
        if (!usuarioID) {
            return res.status(404).json({ msg: `No existe el usuario con id ${id}` })
        }

        return res.status(200).json(usuarioID)
    } catch (error) {
            console.log(error)
            
            return res.status(500).json({
            error: `No se pudo obtener el detalle del usuario del id n° ${req.params.id}`
        })
    }
}

module.exports = { getUsuarios, getUsuarioById }