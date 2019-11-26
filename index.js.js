const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 9998
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var resp = "";
const fs = require('fs')
const js2xml = require("js2xmlparser")

app.get('/operacion/:id', function(req, res, next) {
if (req.params.id == "editar") {
  resp = "El Estudiante se ha editado correctamente.";
}else if (req.params.id == "eliminar") {
  resp = "El Estudiante se ha eliminado correctamente.";
}else {
  resp = "Se produjo un problema en la Edición/Eliminación";
}
  res.json({msg: resp});
});

app.get('/G4T7', (req, res) => {
res.send({ msg: 'SERVICIO GRUPO 04'}) 
})

app.put('/upload',function(req,res){
    var json = req.body
    var xml = js2xml.parse("usuario",json)
    console.log(json)
    console.log(xml)
	fs.writeFile('datosEstudiantes/usuarios.xml',xml,(error)=>{	
		if(error){
			throw error;
		}
        console.log('El archivo se ha creado correctamente');
        res.send(200)
        res.end()
	})

})


app.listen(port, () => {
 console.log(`El servidor está inicializado en el puerto ${port}`);
});

module.exports = app;