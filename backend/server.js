//Dame el código base para configurar la conexión con mi base de datos local
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3001;

const DB = mysql.createConnection({
  host: 'localhost',
    user: 'root',
    password: '',
    database: 'ux'
});
//Conectar la base de datos
DB.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

//Declarar una ruta que sirve al fronted 
app.get('/iniciar-sesion', (req, res) => {
    const SQL = 'SELECT * FROM usuarios';
    DB.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

//Declarar una ruta que sirve al fronted que registre los datos de un usuario
app.post('/registrarse', (req, res) => {
    const { nombre, correo, contrasena } = req.body;
    const SQL = 'INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)';
    DB.query(SQL, [nombre, correo, contrasena], (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    });


