// const getApiDb = require("../dataTotal/getApiDb");
const getApiDb = require("../dataTotal/getApiDb");
// const { getDogsDb } = require("../dataTotal/getDogsDb");
// const { getDogsApi } = require("../dataTotal/getDogsApi");
const { Dog } = require("../db");
// const {getApiDb} =




// <=============== controller getallDogs ===============>
async function searchDogsInApiAndDB() {
    // Guardamos los datos de la API Y DB en data
    let data = await getApiDb();
    //Si la funcion no recibe nada, devuelve un error.
    if (!Dog) throw new Error("No se encuentran datos");
    return data;
  }
  
  

  // / async function getRecipeById(id, source) {
   
    //     const recipe =
    //     source === "api"
    //     ? await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=72b26e6292e7418eae7f4cb05fed3a80`)
    //     : await Recipe.findByPk(id);
      
    //     return recipe
    //   }
       





  module.exports= {searchDogsInApiAndDB}