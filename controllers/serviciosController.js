const fs = require('fs').promises

const getServicios = async (req, res) => {
    console.log(`Obteniendo lista de Servicios...`);
    try {
        // Leemos directo el producto.json
        const data = await fs.readFile('./data/servicios.json', 'utf8')
        const servicios = JSON.parse(data)

        return res.status(200).json(servicios)
    } catch (error) {
        console.log(error)
        return res
        .status(500)
        .json({ error: 'No se pudieron obtener los servicios' })
    }
}

const getServiciosById = async (req, res) => {
    console.log(`Buscando el Servicio...`);
    try {
        // Volvemos a leer el productos.json
        const data = await fs.readFile('./data/servicios.json', 'utf8')
        const servicios = JSON.parse(data)

        const { id } = req.params

        // Buscamos el producto específico en el array
        const servicioID = servicios.find((p) => p.id === parseInt(id))

        // Si el id no existe, mandamos un 404
        if (!servicioID) {
            return res.status(404).json({ msg: `No existe el servicio con id ${id}` })
        }

        return res.status(200).json(servicioID)
    } catch (error) {
            console.log(error)
            
            return res.status(500).json({
            error: `No se pudo obtener el detalle del servicio del id n° ${req.params.id}`
        })
    }
}

module.exports = { getServicios, getServiciosById }
