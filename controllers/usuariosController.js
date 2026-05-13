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

const loginUsuario = async (req, res) => {
    try {
        const data = await fs.readFile('./data/usuarios.json', 'utf8')
        const usuarios = JSON.parse(data)

        // Extraemos lo que el front-end nos mandó en el POST
        const { email, password } = req.body

        // Buscamos si existe alguien con ese mail y esa clave exacta
        const usuarioValido = usuarios.find(u => u.email === email && u.password === password)

        if (!usuarioValido) {
            return res.status(401).json({ msg: "Correo o contraseña incorrectos" })
        }

        // Si está bien, devolvemos los datos del usuario 
        return res.status(200).json(usuarioValido)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Error interno en el login' })
    }
}

const registrarUsuario = async (req, res) => {
    try {
        const data = await fs.readFile('./data/usuarios.json', 'utf8')
        const usuarios = JSON.parse(data)

        // Agarramos los datos del nuevo usuario
        const nuevoUsuario = req.body
        
        // Le inventamos un ID nuevo (el último + 1)
        if (usuarios.length > 0) {
            nuevoUsuario.id = usuarios[usuarios.length - 1].id + 1;
        } else {
            nuevoUsuario.id = 1;
        }
        
        // Lo metemos en nuestro array de memoria
        usuarios.push(nuevoUsuario)

        // Lo agregamos al usuarios.json
        await fs.writeFile('./data/usuarios.json', JSON.stringify(usuarios, null, 2))

        return res.status(201).json({ msg: "Usuario registrado con éxito", usuario: nuevoUsuario })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Error al registrar el usuario' })
    }
}

module.exports = { getUsuarios, getUsuarioById, loginUsuario, registrarUsuario }