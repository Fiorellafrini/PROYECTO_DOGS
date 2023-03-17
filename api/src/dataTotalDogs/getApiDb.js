const { getDogsApi } = require("./getDogsApi")
const { getDogsDb } = require("./getDogsDb")


//Junto todos los datos
const getApiDb = async () => {
    try{

        const dataApi = await getDogsApi();
        let dataDB = await getDogsDb();       

            // SI YO ACTIVO LO SIGUIENTE LA INFORMACION (LINEA 26 A 38) ME LLEGA TEMP COMO LA API, SINO  ME LLEGA ASI:
            // "temperaments": [
            //     {
            //         "name": "Active",
            //         "dog_temperament": {
            //             "dogId": "fc1ee0bf-e97d-4247-9a08-90515e06dcb5",
            //             "temperamentId": 1
            //         }
            //     }
            // ]

            dataDB = await dataDB.map((dog) => {
                return {
                    id: dog.dataValues.id,
                    name: dog.dataValues.name,
                
                    // height: dog.dataValues.heigth.metric,
                    // weight: dog.dataValues.weigth.metric,
                    life_span: dog.dataValues.life_span,
                    breed_group: dog.dataValues.breed_group,
                    image: dog.dataValues.image,
                    origin: dog.dataValues.origin,
                    bred_for: dog.dataValues.bred_for,
                    temperaments: dog.dataValues.temperaments.map((item) => item.name)
                };
            });

        // console.log("dataaaaaaaaaaa", dataDB);

        const allDogs = dataDB.concat(dataApi)
        // const allDogs = [...dataDB, ...dataApi]; 
        //todo lo que tenga en dataDB y todo lo que tenga en dataApi

        return allDogs;
    }catch(error){
        console.log(error.message);
    }
}
 
module.exports =  {getApiDb};
