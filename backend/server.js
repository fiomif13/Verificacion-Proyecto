const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Asegúrate de que esta línea esté antes de las rutas

const port = 3001;

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ux',
  debug: true // Habilitar el registro de consultas
});

DB.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.get('/iniciar-sesion', (req, res) => {
  const SQL = 'SELECT * FROM usuarios';
  DB.query(SQL, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error executing query' });
      return;
    }
    res.json(result);
  });
});

app.post('/registrarse', (req, res) => {
  const { nombre_usuario, correo, contrasena, apellido } = req.body;
  console.log('Datos recibidos:', req.body); // Verificar los datos recibidos

  const SQL = 'INSERT INTO usuarios (nombre_usuario, contrasena, correo, apellido) VALUES (?, ?, ?, ?)';
  const values = [nombre_usuario, contrasena, correo, apellido]; // Usar los datos recibidos

  DB.query(SQL, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error executing query' });
      return;
    }
    console.log('Usuario registrado correctamente:', result); // Verificar el resultado
    res.json({ message: 'Usuario registrado correctamente' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
