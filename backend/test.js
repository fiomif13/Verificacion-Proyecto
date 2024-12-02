const request = require('supertest');
const app = require('./server');

describe('Pruebas unitarias para el servidor', () => {

  test('POST /registrarse debería registrar un usuario', async () => {
    const newUser = {
      nombre_usuario: 'testuser',
      correo: 'testuser@example.com',
      contrasena: '123456',
      apellido: 'Test'
    };

    const response = await request(app)
      .post('/registrarse')
      .send(newUser);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Usuario registrado correctamente');
  });

  test('POST /iniciar-sesion debería iniciar sesión correctamente', async () => {
    const credentials = {
      nombre_usuario: 'testuser',
      contrasena: '123456'
    };

    const response = await request(app)
      .post('/iniciar-sesion')
      .send(credentials);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('usuario_id');
  });

  test('GET /categorias debería devolver todas las categorías', async () => {
    const response = await request(app).get('/categorias');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /venta-nuevos debería devolver juegos nuevos', async () => {
    const response = await request(app).get('/venta-nuevos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /juego-detalle/:juego_id debería devolver detalles de un juego específico', async () => {
    const juegoId = 1; // Asegúrate de que este ID exista en la base de datos de prueba
    const response = await request(app).get(`/juego-detalle/${juegoId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('titulo');
    expect(response.body).toHaveProperty('precio');
  });

  test('POST /guardar-compra debería guardar una compra correctamente', async () => {
    const compra = {
      usuario_id: 1, // Asegúrate de que este ID exista en la base de datos de prueba
      juegosSeleccionados: [{ juego_id: 1, cantidad: 2 }],
      precioTotal: 100
    };

    const response = await request(app)
      .post('/guardar-compra')
      .send(compra);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Compra guardada correctamente');
  });

  test('GET /historial/:usuario_id debería devolver el historial de un usuario', async () => {
    const usuarioId = 1; // Asegúrate de que este ID exista en la base de datos de prueba
    const response = await request(app).get(`/historial/${usuarioId}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
