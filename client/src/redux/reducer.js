import { CLEAN_DETAILS, GET_DETAILS, GET_DOGS, CLEAN_CARDS } from "./action-types";

const initialState = {
    // pageDogs: [],
    dogs: [],
    details: {},
    // copyDogs: [],
    // filters: { origin: "allDogs", temperaments: "allDogs"},
    // temperaments: [],      
};

const rootReducer = (state= initialState, action) => {
    // let allDogs = state.dogs

    switch(action.type) {
        case GET_DOGS:
            return {
                ...state, // copia del estado, para no perderlo
                dogs: [...action.payload] // action. payload me trae todo el array con los dogs. Estoy haciendo que en mi estado global se me guarden todos los dogs que son la respuesta de la api
            }
        case GET_DETAILS:
            // console.log("Details received:", action.payload);
            return {
                ...state,
                details: action.payload
        }
        case CLEAN_DETAILS: //piso el valor de detailñs con un obj vacio
            return {
                ...state,
                details: {}
            }
        case CLEAN_CARDS:
            return {
                ...state,
                dogs: []
            }

    
        default:
            return {...state} // una copia del estado inicial
    }
}


export default rootReducer;