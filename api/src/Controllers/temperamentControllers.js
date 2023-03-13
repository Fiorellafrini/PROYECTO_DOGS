const axios = require ("axios")
const { Temperament } = require("../db");

const filtrarArr = (arr) => {
    let clean = arr
        .map((element) => element.temperament)
        .join()
        .split(",")
        .filter((element) => element.length > 0)
            .map((element) => element.trim());

        // console.log(filtrarArr);
    let cleaner = [...new Set(clean)]
    return cleaner

}

const getAllTemp = async () => {
    const getTempApi = (
        await axios.get("https://api.thedogapi.com/v1/breeds?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ")).data


let temperamentos = await filtrarArr(getTempApi)

temperamentos.forEach((element)=> {
            Temperament.findOrCreate({
                where: {
                    name: element,
                },
            })
    });
    
    const allTemperaments = await Temperament.findAll();
    return allTemperaments;
};

module.exports = getAllTemp;

//---------------------------------------------------------------------------------
// const getDogsApi = require("../dataTotalDogs/getDogsApi")


//  const temperamentDB = async () => { 
//  const apiInfo = await axios.get("https://api.thedogapi.com/v1/breeds?api_key=?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ");
//     let aux= apiInfo.data.map((temp) =>{
//     const obj = {
//         // id: temp.id,
//         name: temp.name
//     }
//     return obj
//     //obtengo un array con cada temperamento , con id y name
//  })

//  // creo los temp en la db, el bulkcreate crea todos los obj al mismo tiempo y recibe un array con ellos
//  Temperament.bulkCreate(aux)
//  //obtengo un arreglo de obj con temperamentos (con id y name)

 
//  }
//-------------------------------------------------------------------------
// const dogsss = async () => {
//  const dogsApi = await get("https://api.thedogapi.com/v1/breeds?api_key=?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ")
// //  const dogsApi = await get(`${URL_PATH_API}?api_key=${API_KEY}`);
//     const dogsInfo = await dogsApi.data.map(dog => {
//         return {
//             id: dog.id,
//             name: dog.name,
//             height: dog.height.metric,
//             weight: dog.weight.metric,
//             image: dog.image.url,
//             temperament: dog.temperament,
//             life_span: dog.life_span,
//             bred_for: dog.bred_for,
//         }
//     })
//     return dogsInfo;
// };

//  const temperamentDB = async () => {
//     // const dogs = await getDogsApi();
//  const apiInfo = await dogsss()
// //  const apiInfo = await axios.get("https://api.thedogapi.com/v1/breeds?api_key=?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ")

//     const temp = apiInfo.map(dog => dog.temperament).join().split(",");
//     // .filter(el=> el.length > 0);
//     const tempDB = temp.map(element => element.trim());


//     tempDB.forEach(element => {
//         if(element) {
//             Temperament.findOrCreate({
//                 where: {
//                     name: element
//                 }
//             })
            
//         }
        
//     });
    
//     const allTemperaments = await Temperament.findAll();
//     return allTemperaments;
// };




