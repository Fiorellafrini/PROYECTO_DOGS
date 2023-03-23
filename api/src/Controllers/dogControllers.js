const { default: axios } = require("axios");
const {getApiDb} = require("../dataTotalDogs/getApiDb");
const { Dog, Temperament } = require("../db");
const specialCharactresTypeRegex = /[0-9@:%._+~#=]/gi;


// <=============== controller getallDogs ===============>
async function searchDogsInApiAndDB() {
    // Guardamos los datos de la API Y DB en data.
    let data = await getApiDb();
    //Si la funcion no recibe nada, devuelve un error.
    if (!Dog) throw new Error("No se encuentran datos");
    return data;
  }
    //En la ruta getAll si pido lo de la db primero(getDb) me sale un array vacio pq no cree nada, recien se empieza a cargar despues de hacer los post.
    
  

// <=============== controller getId ===============>

// const getId = async(id) => {
//   const allBreeds = await getApiDb();
//   // if(!data) throw Error ('No hay data')
//   const filtredBreed = allBreeds.filter(e =>e.id == id);
// if(filtredBreed.length < 0) throw Error ('No hay dogs con ese id')
// return filtredBreed
// }
// <=============== controller searchByName ===============>
      
async function searchByName(name) {
  //Validamos los datos ingresados en la busqueda
  if (!name)
    throw new Error("Debe ingresar el nombre de la raza a buscar");

  if (specialCharactresTypeRegex.test(name)) {
    throw new Error("Debes ingresar un nombre valido");
  }
  // Guardamos los datos de la API/DB en data
  const data = await getApiDb();

  //Si no recibe info de los dogs devuelve un error
  if (!data) throw new Error("No hay info");

  //Buscamos en data un dog que tenga el name que recibimos por parametros,
  //Transformo todo a minuscula
  let findDog = data.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase()),
  );
  //Si no hay coincidencia
  if (!findDog.length) throw new Error("No se pudo encontrar");

  return findDog;
}


// <=============== controller createDog ===============>

// Creamos un dog y la guardamos en la base de datos
// const createDog = async ( name, heightMin, heightMax, weightMin, weightMax, life_span, image, bred_for, breed_group, origin, temperaments ) => {

  // if (!name || !heightMin || !heightMax || !weightMin || !weightMax) throw Error("Mandatory data is missing");


  const createDog = async ( 
    name, 
      heightMin, 
      heightMax, 
      weightMin,
      weightMax, 
      life_span, 
      breed_group, 
      bred_for, 
      image, 
      origin, 
      temperaments 
             ) => {
    if (!name || !heightMin || !heightMax || !weightMin || !weightMax) {
      throw new Error("Mandatory data is missing");
    }
  
//   //Validacion los datos
//     if (!name || !height || !weight ) throw Error("Mandatory data is missing");

  //No pongo todas las prop de modelos porque los que dicen defaultvalue o allownull true no los pongo ya que se crean solas.
 

 //Agrego el newDog a mi base de datos, con un llamado asyn
  const newDog = await Dog.create({ 
    // name: name ? name : null, 
    // heightMin: heightMin ?  heightMin : null,
    // heightMax: heightMax ?  heightMax : null,
    // weightMax: weightMax ?  weightMax : null,
    // weightMin :  weightMin ?  weightMin : null,
    // life_span: life_span ? life_span : null, 
    // breed_group: breed_group ? breed_group : null,
    // bred_for: bred_for ? bred_for : null, 
    // origin: origin ? origin :null,
    // image: image ? image : null,
    name, 
    heightMin, 
    heightMax, 
    weightMin,
    weightMax, 
    life_span, 
    breed_group, 
    bred_for, 
    image, 
    origin, 
    temperaments 
    // createdInDb: true // agregar el campo createdInDb y asignarle el valor de true. entonces cuando creo un perro en bd se le asigna este valor. que luego lo uso en el front
  
    })
    
  //console.log(newDog);

  await newDog.addTemperaments(temperaments); 
  //Relaciona el newDog con los temperaments creados en la bd.

  //los metodos se guardan en el prototipo, consologue lo de abajo, paso el insomnia y me consologuea los metodos.
  //Los metodos los crea  sequalize cuando se crea la relacion n:n.
  //(set:setea, has:preguntar si tiene, add:agregar, count:contar, remove:removar, get:obtener)

 //  console.log("MODELO", Dog.__proto__);
 //  console.log("ENTIDAD", newDog.__proto__);

  
  return newDog;
};


//------------------/delete/:id------------------------

// const deleteDog = async (id) => {
   
//   const result = Dog.findAll({
//       where: {
//         id: {
//           [Op.eq]: id,
//         },
//       },
//     });
//     await Dog.destroy({
//       where: {
//         id: id,
//       },
//     });
  
//     return result;
//   };

module.exports= {searchDogsInApiAndDB, searchByName, createDog}
