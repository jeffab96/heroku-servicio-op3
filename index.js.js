const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 9998
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/G4T7', (req, res) => {
res.send({ msg: 'SERVICIO GRUPO 04'}) 
})
app.listen(port, () => {
 console.log(`El servidor está inicializado en el puerto ${port}`);
});