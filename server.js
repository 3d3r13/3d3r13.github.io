const express = require('express');
const app = express();

app.use(express.json()); // Para poder parsear JSON

app.post('/suscribirse', (req, res) => {
    const email = req.body.email;

    // Aquí puedes agregar el código para guardar el email en tu base de datos

    console.log(`Email recibido: ${email}`);
    res.send('Gracias por suscribirte a nuestro boletín!');
});

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));
