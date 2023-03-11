const { Router } = require('express');



const temperamentRouter = Router();


// #### **📍 GET | /temperaments**
// -  Obtiene todos los temperamentos existentes.
// -  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
temperamentRouter.get("/getAll", async (req,res)=>{
    res.send("estoy en temperament")
})

module.exports= temperamentRouter;
