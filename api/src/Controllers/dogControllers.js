const { default: axios } = require("axios");
const {getApiDb} = require("../dataTotalDogs/getApiDb");
// const getDogsApi  = require("../dataTotalDogs/getDogsApi");
// const getDogsDb = require("../dataTotalDogs/getDogsDb");
const { Dog, Temperament } = require("../db");
const specialCharactresTypeRegex = /[0-9@:%._+~#=]/gi;


// <=============== controller getallDogs ===============>
async function searchDogsInApiAndDB() {
    // Guardamos los datos de la API Y DB en data
    let data = await getApiDb();
    //Si la funcion no recibe nada, devuelve un error.
    if (!Dog) throw new Error("No se encuentran datos");
    return data;
  }
//en la ruta getAll si pido lo de la db primero(getDb) me sale un array vacio pq no cree nada, recien se empieza a cargar despues de hacer los psot
  
  
// <=============== controller getId ===============>

  // const getId = async (id,source) => {
      //      const dog =
      //   source === "api"
      //   ? await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?apiKey=72b26e6292e7418eae7f4cb05fed3a80`)
      //   : await Dog.findByPk(id);
      
      //   return dog
      // }

// const getId = async (idRaza) => {
//   const dogs = await getDogsApi()
//   const vacio = "No existe perro con ese id"
//   let idFiltered = dogs.filter((element) => element.id === idRaza)
//   return idFiltered.length ? idFiltered : vacio
// }

// <=============== controller searchByName ===============>
      
async function searchByName(name) {
  //Validamos los datos ingresados en la busqueda
  if (!name)
    throw new Error("Debe ingresar el nombre de la raza a buscar");

  if (specialCharactresTypeRegex.test(name)) {
    throw new Error("Debes ingresar un nombre valido");
  }

  // Guardamos los datos de la API en data
  const data = await getApiDb();

  //Si no recibe info de los dogs devuelve un error
  if (!data) throw new Error("No hay info");

  //buscamos en la Api un dog que tenga el name que recibimos por parametros,
  //transformo todo a minuscula
  let findDog = data.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase()),
  );

  //Si ninguna coincide, buscamos en la base de datos
  if (!findDog.length) throw new Error("No se pudo encontrar");

  return findDog;
}





// <=============== controller createDog ===============>


const createDog = async (
  name, 
  image, 
  height, 
  weight, 
  life_span, 
  breed_group, 
  bred_for, 
  origin, 
  temperaments ) => {
  
    if (!name || !height || !weight ) throw Error("Mandatory data is missing");

 
  const newDog = await Dog.create({ 
    name, 
    image,
    height,
    weight, 
    life_span, 
    breed_group, 
    bred_for, 
    origin})
//           // createInDb: true
    

  // temperaments.forEach(async (element) => {
//     const pushTemp = await Temperament.findAll({
//       where: {
//          name
//       },
//     });
 console.log(newDog);
    await newDog.addTemperaments(temperaments);
    
  
  return newDog;
};


module.exports= {searchDogsInApiAndDB, searchByName, createDog}
