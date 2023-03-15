const axios = require ("axios")
const { Temperament } = require("../db");
const {getDogsApi} = require("../dataTotalDogs/getDogsApi")

// const filtrarArr = (arr) => {
//     let clean = arr
//         .map((element) => element.temperament)
//         .join() // uno los elemnetos del arr
//         .split(",") //divido y separo mediante ,
//         .sort()
//         .filter((element) => element.length > 0) //
//             .map((element) => element.trim()); //trim borra espacios

//     let newCleaner = [...new Set(clean)]// CREO UNA INSTANCIA NEWSET que elimina los duplicados
//     return newCleaner

// }

// const getAllTemp = async () => {
//     const getTempApi = (
//         await axios.get("https://api.thedogapi.com/v1/breeds?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ")).data
                                

// let temperamentos = await filtrarArr(getTempApi)

// temperamentos.forEach((element)=> {
//             Temperament.findOrCreate({
//                 where: {
//                     // id: element,
//                     name: element,
//                 },
//             })
//     }); 
    
//     const allTemperaments = await Temperament.findAll();
//     return allTemperaments;
// };

// module.exports = {getAllTemp};
// //---------------------------------MARTIN
const getAllTemp = async (req, res) => {
    try {

        const apiInfo = 
        (await axios.get("https://api.thedogapi.com/v1/breeds?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ")).data
        
        // await axios.get("https://api.thedogapi.com/v1/breeds?api_key={live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ}")
        
        const temperaments = apiInfo.map(breed => breed.temperament).join().split(",").sort()
        // console.log(temperaments)
        await temperaments.filter((temp, ind) => temperaments.indexOf(temp) === ind)
        .forEach(temp => {
            if (temp.trim() !== "") {
                Temperament.findOrCreate({where: {
                    name: temp.trim()
                }})
            }
        });

        const dbTemperaments = await Temperament.findAll({
            order: ["name"]
        })
        // console.log(dbTemperaments)
        res.status(200).json(dbTemperaments)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports= {getAllTemp};

//---------------------------------------------------------------------------------
// const getAllTemp = async (req, res) => {

//     try{
//     // const getAllTemp = async () => {
//     const dogs = await getDogsApi();
//     const temp = dogs.map(dog => dog.temperaments).join().split(",");
//     const tempDB = temp.map(element => element.trim());

//     tempDB.forEach(element => {
//         if(element) {
//             Temperament.findOrCreate({
//                 where: {
//                     name: element
//                 }
//             })
            
//         }
        
//     })
    
//     const allTemperaments = await Temperament.findAll();
//     // return allTemperaments;

//         res.status(200).json(allTemperaments)
//     } catch (error) {
//         res.status(400).json({error:error.message})
//     }
// }


// module.exports= {getAllTemp};
