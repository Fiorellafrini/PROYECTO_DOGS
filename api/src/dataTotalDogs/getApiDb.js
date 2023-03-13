const {getDogsApi} = require("./getDogsApi")
const {getDogsDb} = require("./getDogsDb")





//junto todos los datos
const getApiDb = async () => {
    const dataApi = await getDogsApi();

    const dataDB = await getDogsDb();
    
    const allDogs = [...dataDB, ...dataApi ]; 
    //todo lo que tenga en dataDB y todo lo que tenga en dataApi
    return allDogs;

}
 
module.exports =  getApiDb;
