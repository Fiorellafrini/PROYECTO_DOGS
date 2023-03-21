import { GET_DOGS } from "./action-types";
import { GET_DETAILS } from "./action-types";
import { CLEAN_DETAILS } from "./action-types";
import { CLEAN_CARDS } from "./action-types";
import { SEARCH_DOGS_BY_NAME } from "./action-types";
import { ORDER_BY_NAME } from "./action-types";
import { GET_TEMPERAMENTS } from "./action-types";
import { FILTER_BY_TEMPERAMENTS } from "./action-types";
import { ORDER_BY_WEIGHT_MIN } from "./action-types";
import { ORDER_BY_WEIGHT_MAX } from "./action-types";
import { FILTER_BY_CREATION } from "./action-types";

// import { CREATE_DOG } from "./action-types";
// import { FILTER_BY_CREATION } from "./action-types";
// import { PAGE_DOGS } from "./action-types";
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
export const cleanDetails = () => {
    return { type: CLEAN_DETAILS}
}

export const cleanCards = () => {
    return {type: CLEAN_CARDS}
}
export const getDogsName = (name) => {
    return function (dispatch) {
      fetch(`http://localhost:3001/dogs?name=${name}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: SEARCH_DOGS_BY_NAME, payload: data }))
        .catch((error) => {
          window.alert("Dogs not found!");
        });
    };
};


// export const getTemperaments = () => {
//     return (dispatch) => {
//       fetch(`http://localhost:3001/temperaments`)
//         .then((response) => response.json())
//         .then((data) =>
//           dispatch({ type: GET_TEMPERAMENTS, payload: data })
//         )
//         .catch((error) => {
//           // console.log(error);
//         })
//     };
//   };

export function getTemperaments (){
return async function (dispatch){
    const response = await axios.get("http://localhost:3001/temperaments")
    return dispatch({
        type: GET_TEMPERAMENTS,
        payload: response.data
    })
}
}

export const filterTemperament = (payload) => {
    return { type: FILTER_BY_TEMPERAMENTS, payload };
  };

export const orderByName = (payload) => {
    return { type: ORDER_BY_NAME, payload };
  };

export const orderByWeightMin = (payload) => {
    return { type: ORDER_BY_WEIGHT_MIN, payload };
  };
  
export const orderByWeightMax = (payload) => {
    return { type: ORDER_BY_WEIGHT_MAX, payload };
  };

export function filterByCreation (payload){
    return {type: FILTER_BY_CREATION, payload
    }
}

  