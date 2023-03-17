import { GET_DOGS } from "./action-types";
import { GET_DETAILS } from "./action-types";
import axios from "axios";// si quiero traerme los personajes del back a mi front voy a usar axios o fetch 



export const getDogs = () => {
    // return async function(dispatch){// como hago una peticion a la api me retorna una fn
    //     let response = await axios("https://api.thedogapi.com/v1/breeds?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ") //ACA HAGO LA CONEXION// response es la respuesta que me da axios, es el obj con

    //     return dispatch({ type: GET_DOGS, payload: response.data }) // retorno un obj con la info, como es muy grande me interesa quedarme solo con data
    // }

    return function(dispatch){
        fetch(`http://localhost:3001/dogs/getAll`)
        // fetch("https://api.thedogapi.com/v1/breeds?api_key=live_pzIXSPWa66AzR9wONkfiSPwnSy2aKyfy82MQNexrZXZxsSHqUOFJ2jTS3XNhTuSQ")
        .then(response => response.json())
        .then(data => {
            return dispatch({ type: GET_DOGS, payload: data})
        })
    }  
}

export const getDetails = (id) => {
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/dogs/${id}`);
             return dispatch({ type: GET_DETAILS, payload: response.data })
    }
}
    // export const getDetails = (id) => {
    //     return (dispatch) => {
    //       fetch(`http://localhost:3001/dogs/${id}`)
    //         .then((response) => response.json())
    //         .then((data) =>
    //           dispatch({ type: GET_DETAILS, payload: data }))
    //         .catch((error) => {
    //           // console.log(error);
    //         })
    //     };
    //   };
