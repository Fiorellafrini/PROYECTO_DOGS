const { Router } = require('express');
const dogRouter = Router();
const { searchDogsInApiAndDB, searchByName, createDog } = require('../Controllers/dogControllers');
const { getApiDb} = require('../dataTotalDogs/getApiDb');
const { getDogsApi } = require('../dataTotalDogs/getDogsApi');
const { Dog, Temperament } = require("../db");


// #### **📍 GET | /dogs**
// -  Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.


dogRouter.get('/getAll', async (req,res) => {
  try {
     const allDogs = await searchDogsInApiAndDB();
      res.status(200).send(allDogs);   
    } 
  catch (error) {
      res.status(404).json({error: error.message})
    }
});


// #### **📍 GET | /dogs/:idRaza**
// -  Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
// -  La raza es recibida por parámetro (ID).
// -  Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// -  Debe funcionar tanto para los perros de la API como para los de la base de datos.


  // El ultimo id es el 264,  pero no estan todos, se saltea algunos numeros( por ejemplo el 99 y 100)
dogRouter.get('/:id', async (req,res) =>{
  const {id} = req.params

  const allBreeds = await getApiDb()
  const filtredBreed = allBreeds.filter(e =>e.id == id);
  filtredBreed.length > 0
  ? res.status(200).send(filtredBreed)
  : res.status(404).send(`Dog not found`);
console.log(allBreeds);

// dogRouter.get('/:id', async (req,res) =>{
//     const {id} = req.params
//     try {
//       const allBreeds = await getApiDb(id)
//       res.status(200).json(allBreeds)
//     } catch (error) {
//       res.status(400).send({error: error.message})
//     }

})


// #### **📍 GET | /dogs/name?="..."**
// -  Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe la raza, debe mostrar un mensaje adecuado.
// -  Debe buscar tanto los de la API como los de la base de datos.


  //Buscamos un dogs por nombre
  dogRouter.get("/", async (req, res) => {
    try {
      const { name } = req.query;
      const dog = await searchByName(name);
      res.status(200).json(dog);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });



// #### **📍 POST | /dogs**
// -  Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).


dogRouter.post("/", async (req, res) => {
  //los datos que recibo por body son los modelos 
  const { 
      name, 
      image, 
      height, 
      weight, 
      life_span, 
      breed_group, 
      bred_for, 
      origin, 
      temperaments } = req.body;
  
  try {
        const newDog = await createDog(
          name, 
          image, 
          height, 
          weight, 
          life_span, 
          breed_group, 
          bred_for, 
          origin, 
          temperaments ); 

      res.status(200).json(newDog);
  } 
  catch (error) {
      res.status(400).send(error.message)
  }
});

//RUTA EXTRA DELETE ID
dogRouter.delete('/delete/:id', async (req,res) =>{
  try {
    const { id } = req.params;
    const dogDelete = await Dog.findByPk(id);
    dogDelete.destroy()
    res.status(200).send(dogDelete)
  } catch (error) {
    res.status(400).send(error.message);
  }
})




module.exports = dogRouter;