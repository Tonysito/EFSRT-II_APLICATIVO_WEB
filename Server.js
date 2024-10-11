const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Ruta al archivo usuarios.json dentro de la carpeta src
const usuariosFilePath = path.join(__dirname, 'src', 'usuarios.json');

// Leer usuarios desde usuarios.json
app.get('/usuarios', (req, res) => {
    fs.readFile(usuariosFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo');
        }
        res.send(data);
    });
});

// Guardar usuarios en usuarios.json
app.post('/usuarios', (req, res) => {
    const newUser = req.body;

    // Leer usuarios existentes
    fs.readFile(usuariosFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo');
        }

        const users = JSON.parse(data);
        newUser.id = users.length ? users[users.length - 1].id + 1 : 1; // Asignar ID único
        users.push(newUser);

        // Escribir en el archivo
        fs.writeFile(usuariosFilePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error al escribir en el archivo');
            }
            res.status(201).send(newUser);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});