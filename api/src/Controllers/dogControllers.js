// const getApiDb = require("../dataTotal/getApiDb");
const { default: axios } = require("axios");
const getApiDb = require("../dataTotal/getApiDb");
// const { getDogsDb } = require("../dataTotal/getDogsDb");
// const { getDogsApi } = require("../dataTotal/getDogsApi");
const { Dog, Temperament } = require("../db");
// const {getApiDb} =




// <=============== controller getallDogs ===============>
async function searchDogsInApiAndDB() {
    // Guardamos los datos de la API Y DB en data
    let data = await getApiDb();
    //Si la funcion no recibe nada, devuelve un error.
    if (!Dog) throw new Error("No se encuentran datos");
    return data;
  }
//en la ruta getAll si pido lo de la db primero(getDb) me sale un array vacio pq no cree nada, recien se empieza a cargar despues de hacer los psot
  
  

  const getId = async (id,source) => {
           const dog =
        source === "api"
        ? await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?apiKey=72b26e6292e7418eae7f4cb05fed3a80`)
        : await Dog.findByPk(id);
      
        return dog
      }
      // async function getRecipeById(id, source) {
   
      //   const recipe =
      //   source === "api"
      //   ? await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=72b26e6292e7418eae7f4cb05fed3a80`)
      //   : await Recipe.findByPk(id);
      
      //   return recipe





  module.exports= {searchDogsInApiAndDB, getId}