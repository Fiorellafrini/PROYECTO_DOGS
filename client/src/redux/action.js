import { GET_DOGS, GET_DETAILS } from "./action-types";
import axios from "axios;"


export const getDogs = () => {
    return async function(dispatch){// como hago una peticion a la api me retorna una fn
        let response = await axios(`http://localhost:3001/dogs/getAll`); //ACA HAGO LA CONEXION

        return dispatch({ type: GET_DOGS, payload: response.data }) // retorno un obj con la info, como es muy grande me interesa quedarme solo con data
    }
        
}