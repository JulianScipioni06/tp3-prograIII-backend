# Trabajo Práctico Nº3: Node.js, Express y Consumo de APIs 

> **Links del Proyecto**
> * **Front-end (GitHub Pages):** https://julianscipioni06.github.io/tp1-PrograIII/
> * **Repositorio del Front-end:** https://github.com/JulianScipioni06/tp1-PrograIII 
## Integrantes del Grupo 
* **Grupo N°:** 14
* **Integrantes:** 
    - Pozo Bautista
    - Ripa Julian
    - Scipioni Julian
    - Strizzi Guido
    - Wener Joaquin

## Descripción del Proyecto
API REST desarrollada para la materia Programación III. Este servidor provee los datos dinámicos para la pagina de "Cultura Matera". Fue desarrollado utilizando Node.js y Express, gestionando la información mediante archivos JSON para simular una base de datos. La API se encuentra desplegada y funcionando en Render.

## Metodología de Git y GitHub 
Para este desarrollo utilizamos la metodología de ramas por alumno. Cada integrante realizó commits en su respectiva rama, y se generaron Pull Requests para realizar cada merge hacia la rama `main`. Adicionalmente, y como excepción permitida para experimentar con los despliegues automáticos en Render, se realizaron múltiples pull requests a `main`.

## Distribución de Tareas y Archivos 

**División de Tareas**
* **Julián Scipioni:** Conexion del servidor, deploy en render, Desarrollo de rutas y controladores de servicios y equipo.
* **Joaquin Wener:** Desarrollo de rutas y controladores de usuarios.
* **Otros Integrantes:** Bautista, Guido y Julian Ripa, se encargaron de realizar el front de lapagina, por eso no presentan registro aca.

**Estructura de Carpetas:**
* `app.js`: Archivo inicial de ejecución de Node.js.
* `/models`: Archivo base para iniciar el servidor de la API (`server.js`)
* `/controllers`: Separación de la lógica para cada ruta (ej. `serviciosController.js`).
* `/data`: Contiene los archivos JSON estructurados que se consultan.
* `.env`: Archivo local de variables de entorno (excluido del repositorio).
* `.gitignore`: Exclusiones para Git y GitHub.

## Funciones (Back-end) 
Todas las respuestas de rutas y lecturas de archivos se manejan de forma asíncrona mediante bloques `try/catch`. Se implementaron `console.log()` (flags) en los controladores para verificar la ejecución en consola.

* `getServicios`: Endpoint `GET /servicios`. Retorna la lista completa de más de 13 servicios ofrecidos leyendo `servicios.json`.
* `getServiciosById`: Endpoint `GET /servicios/:id`. Retorna el detalle de un servicio específico buscándolo por su parámetro de ruta.
* `getEquipo`: Endpoint `GET /equipo`. Retorna la lista de los integrantes del equipo.
* `getUsuarios`: Retorna la lista de usuarios registrados.
* `getUsuarioById`: Endpoint `GET /perfil/:id`. Devuelve los datos del usuario logueado en el sistema.
* `loginUsuario`: Endpoint `POST /login`. Recibe credenciales desde el front-end, valida las coincidencias y permite el inicio de sesión.
* `registrarUsuario`: Endpoint POST. Registra un usuario nuevo en el sistema, modificando y reescribiendo el JSON.

## Estructura de los Archivos JSON 
Los datos no integran varios "arrays" dentro de un mismo archivo.

**servicios.json**
```json
{
    "id": 1,
    "desc": "Mate Imperial",
    "detalle": "El clásico argentino con virola cincelada y costuras a mano",
    "precio": 50000,
    "imagen": "mate-imperial.jpg",
    "categoria": "mate",
    "materiales": ["Calabaza", "Algarrobo", "Acero"]
}
```

**equipo.json**
```json
{
    "id": 1,
    "nombre": "Facundo \"Cacho\" Morales",
    "puesto": "Especialista en Curado y Materiales",
    "imagen": "integrante1.png"
}
```

**usuarios.json**
```json
{
    "id": 1,
    "nombre": "Julian",
    "apellido": "Scipioni",
    "email": "julian@test.com",
    "password": "123",
    "imagen": "perfil.jpg"
}
```