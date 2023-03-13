const { Router } = require('express');
const getAllTemp = require('../Controllers/temperamentControllers');
// const temperamentDB = require("../Controllers/temperamentControllers")



const temperamentRouter = Router();


// #### **📍 GET | /temperaments**
// -  Obtiene todos los temperamentos existentes.
// -  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
temperamentRouter.get("/charge-temperament", async (req, res) => {
    // res.send("todo esta bien")
    try {
        const allTemps = await getAllTemp();
        res.status(200).send(allTemps)
    } catch (error) {
        res.status(400).json({message: "Temperament is not found"})
    }
})



module.exports= temperamentRouter;
