require("dotenv").config();
const axios = require("axios");

//llamo a la api, y despues me traigo lo que necesito(lo que tengo en modelos)
// tengo un arreglo con los dogs de la api
const getDogsApi = async () => {
try {
    const dogsApi = await axios.get("https://api.thedogapi.com/v1/breeds?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ")
//    console.log(api);
//    res.json(api.data)
    const dogsApiData= await dogsApi.data.map((dog) => {
        return {
            id: dog.id,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            breed_group: dog.breed_group,
            life_span: dog.life_span,
            image: dog.image.url, 
            bred_for: dog.bred_for,
            origin: dog.origin,
            temperament: dog.temperament,
            // createInDb: false,
    };
})
// await dog.bulkCreate(dogsApiData)

return dogsApiData;

    } catch (error){
        return {error:error.message};
    }
};

module.exports = { getDogsApi};