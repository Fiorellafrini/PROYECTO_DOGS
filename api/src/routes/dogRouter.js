const { Router } = require('express');
const dogRouter = Router();
const { searchDogsInApiAndDB, getId, searchByName } = require('../Controllers/dogControllers');
const getDogsDb = require('../dataTotalDogs/getDogsDb');
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

// dogRouter.get("/getAll", async (req, res) => {
//   try {
//       const allTemps = await searchDogsInApiAndDB(Dog);
//       res.status(200).json(allTemps)
//   } catch (error) {
//       res.status(400).json({message: "no se cargaaa"})
//   }
// })



// #### **📍 GET | /dogs/:idRaza**
// -  Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
// -  La raza es recibida por parámetro (ID).
// -  Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// -  Debe funcionar tanto para los perros de la API como para los de la base de datos.

dogRouter.get('/:id', async (req,res) =>{
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


// dogRouter.get('/', async(req, res)=> {
//     res.send("estoy en name")
// })

  //buscamos un dogs por nombre
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
// dogRouter.post('/', async(req, res)=> {
//     res.send("estoy en post")
// })


//Creamos un dog y la guardamos en la base de datos
dogRouter.post("/", async (req, res) => {
    const { name, image, height, weight, life_span, breed_group, bred_for, origin, temperament } = req.body; //los datos que recibo por body son los modelos

  // VALIDACION DE DATOS
    if (!name || !height || !weight ) res.status(400).json({mge: "Faltan datos"})
    // no pongo todas las prop de modelos porque los que dicen defaultvalue no los pongo ya que se crean solas las que pase por defecto.

    try {
      //agrego  la newraza a mi base de datos, con un llamado asyn
    const newDog = await Dog.create({ name, image, height, weight, life_span, breed_group, bred_for, origin }); 


    //los metodos se guardan en el prototipo, consologue lo de abajo, paso el insomnia y me consologuea los metodos., los metodos se crean cuando se crea la relacion n:n. y sequelize genera los metodos para poder hacer la relacion.

//  console.log("MODELO", Dog.__proto__);
//  console.log("ENTIDAD", newDog.__proto__);

     await newDog.addTemperament(temperament); 
    //   relaciona el dog new con el temperamento que se encuentre
    // const aux = Dog.findByPk(newDog.id, {include: [{model: Temperament}],
    // })

    res.status(200).send(newDog);
    // res.send(aux)
  } catch (error) {
    res.status(400).send(error.message);
  }
});





module.exports = dogRouter;