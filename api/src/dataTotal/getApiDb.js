const {getDogsApi} = require("./getDogsApi")
const {getDogsDb} = require("./getDogsDb")

//junto todos los datos
const getApiDb = async () => {
    const dataApi = await getDogsApi();
    const dataDB = await getDogsDb();
    const allDogs = [...dataDB, ...dataApi ]; 
    return allDogs;
// console.log(allDogs);

}
 
module.exports =  getApiDb;
