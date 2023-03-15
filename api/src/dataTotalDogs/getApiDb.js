const {getDogsApi} = require("./getDogsApi")
const {getDogsDb} = require("./getDogsDb")



//junto todos los datos
const getApiDb = async () => {
    try{

        let dataApi = await getDogsApi();
        let dataDB = await getDogsDb();       

 
        dataDB = await dataDB.map((breed) => {
            return {
                id: breed.dataValues.id,
                name: breed.dataValues.name,
                // height: breed.dataValues.heigth.metric,
                // weight: breed.dataValues.weigth.metric,
                life_span: breed.dataValues.life_span,
                breed_group: breed.dataValues.breed_group,
                image: breed.dataValues.image,
                origin: breed.dataValues.origin,
                bred_for: breed.dataValues.bred_for,
               
        temperaments: breed.dataValues.temperaments.map((item) => item.name)
                // temperaments: breed.dataValues.temperaments.map( t => t.name ).join(", "),
            };
        });



        // console.log("dataaaaaaaaaaa", dataDB);
    // const allDogs = dataApi.concat(dataDB)
        const allDogs = [...dataDB, ...dataApi]; 
        //todo lo que tenga en dataDB y todo lo que tenga en dataApi
        return allDogs;
    }catch(error){
        console.log(error.message);
    }
}
 
module.exports =  {getApiDb};
