const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/singin', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/singin.html'));
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/carrito.html'));
});

app.get('/producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/producto.html'));
});
// server
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})