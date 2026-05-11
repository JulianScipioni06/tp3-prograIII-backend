const fs = require('fs').promises

class Producto {
    static async obtenerTodos() {
        const data = await fs.readFile('./data/productos.json', 'utf8')
        return JSON.parse(data)
    }

    static async obtenerPorId(id) {
        const productos = await this.obtenerTodos()
        
        return productos.find(prod => prod.id === parseInt(id))
    }
}

module.exports = Producto