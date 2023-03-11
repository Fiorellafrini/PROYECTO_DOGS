const { Router } = require('express');
const dogRouter = Router();
const { searchDogsInApiAndDB, getId } = require('../Controllers/dogControllers');
const { Dog, Temperament , dog_temperament } = require("../db");





// #### **📍 GET | /dogs**
// -  Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

dogRouter.get('/getAll', async (req,res) => {
            try {
        const allDogs = await searchDogsInApiAndDB(Dog);
        res.status(200).json(allDogs);   
    } catch (error) {
        res.status(404).send('Hubo un problema')
    }
});



// #### **📍 GET | /dogs/:idRaza**
// -  Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
// -  La raza es recibida por parámetro (ID).
// -  Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// -  Debe funcionar tanto para los perros de la API como para los de la base de datos.

// dogRouter.get('/:idRaza', async(req, res)=> {
//     // res.send("estoy en id")
//     const { id } = req.params;
//     const source = isNaN(id) ? "db" : "api"

//     try {
//         const dog = await geId (id, source)
//         res.status(200).json(dog);
//     } catch (error) {
//         res.status(400).send(error.message);
        
//     }
// })

dogRouter.get('/:id', async (req,res) =>{
//     try {
//     const {id} = req.params
//       let dog = await getId(id);
//       res.status(200).json(dog);
//     } catch (error) {
//       res.status(404).send(error.message);
//     }
//   });

 
// Buscar receta por id
// recipesGetId.get("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api"
     
    try {
        const dog = await getId(id, source);
        res.status(200).json(dog.data);
      } catch (error) {
        res.status(400).send(error.message);
      }
    });
    
  

// #### **📍 GET | /dogs/name?="..."**
// -  Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe la raza, debe mostrar un mensaje adecuado.
// -  Debe buscar tanto los de la API como los de la base de datos.


dogRouter.get('/', async(req, res)=> {
    res.send("estoy en name")
})



// #### **📍 POST | /dogs**
// -  Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).
dogRouter.post('/', async(req, res)=> {
    res.send("estoy en post")
})


module.exports = dogRouter;