const { Router } = require('express');
const dogRouter = Router();
const { searchDogsInApiAndDB, searchByName, createDog } = require('../Controllers/dogControllers');
const {getApiDb} = require('../dataTotalDogs/getApiDb');
const { Dog, Temperament } = require("../db");


// #### **📍 GET | /dogs**
// -  Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

// dogRouter.get('/getAll', searchDogsInApiAndDB)


dogRouter.get('/getAll', async (req,res) => {
            try {
        const allDogs = await searchDogsInApiAndDB();
        res.status(200).send(allDogs);   
    } catch (error) {
        res.status(404).json({error: error.message})
    }
});


// #### **📍 GET | /dogs/:idRaza**
// -  Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
// -  La raza es recibida por parámetro (ID).
// -  Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// -  Debe funcionar tanto para los perros de la API como para los de la base de datos.

// dogRouter.get('/:id', async (req,res) =>{
    // const { id } = req.params;
    // const source = isNaN(id) ? "db" : "api"
     
    // try {
    //     const dog = await getId(id, source);
    //     res.status(200).json(dog.data);
    //   } catch (error) {
    //     res.status(400).send(error.message);
    //   }
    // });

// dogRouter.get('/:id', async (req,res) =>{
// try{
//   const {idRaza} = req.params;
//   const id = await getId(idRaza)
//   res.status(200).json(id)
// } catch(error) {
//   res.status(400).json({ error: error.message})
// }
// })
  


dogRouter.get('/:id', async (req,res) =>{
  const {id} = req.params

  const allBreeds = await getApiDb()
  const filtredBreed = allBreeds.filter(e =>e.id == id);
  filtredBreed.length > 0
  ? res.status(200).send(filtredBreed)
  : res.status(404).send(`Dog not found`);
})

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



// Creamos un dog y la guardamos en la base de datos
// dogRouter.post("/", async (req, res) => {
   
//   const { name, image, height, weight, life_span, breed_group, bred_for, origin, temperament } = req.body; //los datos que recibo por body son los modelos 
//     //agrego temperaMNET, y lo escribo en insomnia en post, va a ser como un array de id

//   // VALIDACION DE DATOS
//     if (!name || !height || !weight ) res.status(400).json({mge: "Faltan datos"})
//     // no pongo todas las prop de modelos porque los que dicen defaultvalue no los pongo ya que se crean solas las que pase por defecto.
//     try {
//       //agrego  la newraza a mi base de datos, con un llamado asyn
//     const newDog = await Dog.create({name, image, height, weight, life_span, breed_group, bred_for, origin }); 

//     //los metodos se guardan en el prototipo, consologue lo de abajo, paso el insomnia y me consologuea los metodos., los metodos se crean cuando se crea la relacion n:n.
//     // y sequelize genera los metodos para poder hacer la relacion.(set:setea, has:preguntar si tiene, add:agregar,count:contar, remove:removar, get:obtener)

// //  console.log("MODELO", Dog.__proto__);
// //  console.log("ENTIDAD", newDog.__proto__);


    
// const aux = await Temperament.findAll({
// where: {
//       name 
//   }
// })
//  await newDog.addTemperament(aux)

// // console.log("console de aux", Temperament)
//  // relaciona el dog new con el temperamento que se encuentre
  
//     res.status(200).json(newDog);
//     // res.send(aux)
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });


// module.exports = dogRouter;


dogRouter.post("/", async (req, res) => {
  const { name, image, height, weight, life_span, breed_group, bred_for, origin, temperaments } = req.body;
  try {
  
        const newDog = await createDog(name, image, height, weight, life_span, breed_group, bred_for, origin, temperaments ); 

      res.status(200).json(newDog);
  } catch (error) {
      res.status(400).send(error.message)
  }
});


module.exports = dogRouter;




// dogRouter.post("/", async (req, res) => {
// try {
//   const { name, image, height, weight, life_span, breed_group, bred_for, origin, temperament } = req.body; //los datos que recibo por body son los modelos 
  
//   const newDog = await createDog(name, image, height, weight, life_span, breed_group, bred_for, origin ); 

//   res.status(200).json(newDog)
// } catch (error) {
//   res.status(400).json({error: error.message})
// }
// })


// module.exports = dogRouter;


//--------------------------------------------------------------------------------------------

// // const createDog = async (req, res) => {
//   try {

//         const {name, image, height, weight, life_span, breed_group, bred_for, origin, temperament } = req.body; //los datos que recibo por body son los modelos

//       const newDog = await Dog.create({ name, image, height, weight, life_span, breed_group, bred_for, origin})
//           // createInDb: true
    

//       const temppp = await Temperament.findAll({
//           where: {
//               name: temperament
//           }
//       })

//       await newDog.addTemperament(temppp)
//       res.status(200).send("Breed created successfully")
//   } catch (error) {
//       res.status(404).json({error:error.message})
//   }
// }
// )

// module.exports = dogRouter;


/////_-------------------------------------------------------------------------------------------------

// dogRouter.post("/", async (req, res) => {

// // const postDog = async (req, res) => {
//   const {name, image, height, weight, life_span, breed_group, bred_for, origin, temperament } = req.body; //los datos que recibo por body son los modelos
//   try {

//       const newDog = await Dog.create({ name, image, height, weight, life_span, breed_group, bred_for, origin, temperament})
//           // createInDb: true
//     // await newDog.addTemperament(temperament)
//     res.status(200).json(newDog);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

