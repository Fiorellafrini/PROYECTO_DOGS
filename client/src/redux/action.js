import { GET_DOGS } from "./action-types";
import axios from "axios";// si quiero traerme los personajes del back a mi front voy a usar axios o fetch 



export const getDogs = () => {
    return async function(dispatch){// como hago una peticion a la api me retorna una fn
        let response = await axios("https://api.thedogapi.com/v1/breeds?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ")
        ; //ACA HAGO LA CONEXION// response es la respuesta que me da axios, es el obj con

        return dispatch({ type: GET_DOGS, payload: response.data }) // retorno un obj con la info, como es muy grande me interesa quedarme solo con data
    }

    
        
}
