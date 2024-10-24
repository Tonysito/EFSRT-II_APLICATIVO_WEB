const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const session = require('express-session'); // Añadir express-session

const app = express();
const PORT = process.env.PORT || 5000; // Usa el puerto proporcionado por Vercel o el 5000 localmente

app.use(cors());
app.use(bodyParser.json());

// Configuración de express-session
app.use(session({
    secret: 'tu_secreto_aqui', // Cambia esto por un secreto fuerte
    resave: false,
    saveUninitialized: true,
}));

// Ruta al archivo usuarios.json dentro de la carpeta server/public
const usuariosFilePath = path.join(__dirname, 'public', 'usuarios.json');

// Ruta al archivo data.json dentro de la carpeta server/public
const productosFilePath = path.join(__dirname, 'public', 'data.json');

// Leer usuarios desde usuarios.json
app.get('/usuarios', (req, res) => {
    fs.readFile(usuariosFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo de usuarios');
        }
        res.json(JSON.parse(data)); // Asegúrate de enviar un objeto JSON
    });
});

// Guardar usuarios en usuarios.json
app.post('/usuarios', (req, res) => {
    const newUser = req.body;

    // Leer usuarios existentes
    fs.readFile(usuariosFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo de usuarios');
        }

        const users = JSON.parse(data);
        newUser.id = users.length ? users[users.length - 1].id + 1 : 1; // Asignar ID único
        users.push(newUser);

        // Escribir en el archivo
        fs.writeFile(usuariosFilePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error al escribir en el archivo de usuarios');
            }

            // Almacenar mensaje de éxito en tempdata
            req.session.tempdata = {
                success: 'Registro exitoso. ¡Bienvenido/a ' + newUser.firstName + '!',
            };

            // Enviar respuesta JSON al frontend con el mensaje de éxito
            res.status(201).json({ success: true, message: req.session.tempdata.success });
        });
    });
});

// Leer productos desde data.json
app.get('/productos', (req, res) => {
    fs.readFile(productosFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo de productos');
        }
        res.json(JSON.parse(data)); // Asegúrate de enviar un objeto JSON
    });
});

// Guardar productos en data.json
app.post('/productos', (req, res) => {
    const newProduct = req.body;

    // Leer productos existentes
    fs.readFile(productosFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo de productos');
        }

        const products = JSON.parse(data);
        newProduct.id = products.length ? products[products.length - 1].id + 1 : 1; // Asignar ID único
        products.push(newProduct);

        // Escribir en el archivo
        fs.writeFile(productosFilePath, JSON.stringify(products, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error al escribir en el archivo de productos');
            }
            res.status(201).send(newProduct);
        });
    });
});

// Middleware para servir index.html para rutas no API
app.use(express.static(path.join(__dirname, '..', 'client', 'build'))); // Sirve archivos estáticos desde build

// Ruta para la página principal
app.get('/', (req, res) => {
    const tempdata = req.session.tempdata; // Obtener el mensaje de tempdata
    req.session.tempdata = null; // Limpiar tempdata después de usarlo

    // Sirve index.html
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});