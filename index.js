const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

const agenda = [
    {
        "nombre" : "Jose",
        "apellido": "Mella",
        "telefono": "849-251-6812",
    },
    {
       "nombre" : "Dilcio",
        "apellido": "Hernandez",
        "telefono": "809-236-1999",
    },
    {
        "nombre" : "Dionicia",
        "apellido": "Sosa",
        "telefono": "849-836-7365",
   }
]

app.post("/agregarContacto", (request, response) =>{
    const contacto = {
        nombre: request.body.nombre,
        apellido : request.body.apellido,
        telefono: request.body.telefono
    }
    agenda.push(contacto);

    const respuesta = {
        data: contacto,
        menssage: "se agrego correctamente", 
        exito: true
    }
    response.send(respuesta)
});

app.get('/Listar', (request, response) => {
                
    const respuesta = {
        data: agenda
    }
    response.send(respuesta)
});

console.log("El servidor está escuchando en el puerto 8080")
app.listen(8080)

