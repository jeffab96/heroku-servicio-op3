const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 9998
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var resp = "";

app.get('/operacion/:id', function(req, res, next) {
if (req.params.id == "editar") {
  resp = "El Estudiante se ha editado correctamente.";
}else if (req.params.id == "eliminar") {
  resp = "El Estudiante se ha eliminado correctamente.";
}else {
  resp = "Se produjo un problema en la Edición/Eliminación";
}
  res.json({output: resp});
});

app.get('/G4T7', (req, res) => {
res.send({ msg: 'SERVICIO GRUPO 04'}) 
})


app.listen(port, () => {
 console.log(`El servidor está inicializado en el puerto ${port}`);
});

module.exports = app;