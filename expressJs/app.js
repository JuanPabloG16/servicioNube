const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// Crear la aplicación Express
const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Crear la conexión a la base de datos
const db = mysql.createConnection({
  host: 'sql10.freesqldatabase.com',
  user: 'sql10708372',
  password: 'M7svjLrRV3',
  database: 'sql10708372',
  port: 3306
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos');
});

// Middleware para parsear el cuerpo de las peticiones
app.use(express.json());

// Ruta para agregar una nueva persona
app.post('/addpersona', (req, res) => {
  let { cedula, nombre, apellido, edad } = req.body;
  let sql = 'INSERT INTO datos (Cedula, nombre, apellido, edad) VALUES (?, ?, ?, ?)';
  let query = db.query(sql, [cedula, nombre, apellido, edad], (err, result) => {
    if (err) throw err;
    res.send('Persona agregada con éxito');
  });
});

// Ruta para obtener todas las personas
app.get('/personas', (req, res) => {
  let sql = 'SELECT * FROM datos';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || servicionube-production.up.railway.app;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
