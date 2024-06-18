const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ux',
  debug: true
});


DB.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.post('/registrarse', (req, res) => {
  const { nombre_usuario, correo, contrasena, apellido } = req.body;
  console.log('Datos recibidos:', req.body);

  const SQL = 'INSERT INTO usuarios (nombre_usuario, contrasena, correo, apellido) VALUES (?, ?, ?, ?)';
  const values = [nombre_usuario, contrasena, correo, apellido];

  DB.query(SQL, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error executing query' });
      return;
    }
    console.log('Usuario registrado correctamente:', result);
    res.json({ message: 'Usuario registrado correctamente' });
  });
});

app.post('/iniciar-sesion', (req, res) => {
  const { nombre_usuario, contrasena } = req.body;
  console.log('Datos recibidos:', req.body);

  const SQL = 'SELECT nombre_usuario, contrasena FROM usuarios WHERE nombre_usuario = ? AND contrasena = ?';
  const values = [nombre_usuario, contrasena];

  DB.query(SQL, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error executing query' });
      return;
    }
    if (result.length > 0) {
      res.json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

