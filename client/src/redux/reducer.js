import { CLEAN_DETAILS,
   GET_DETAILS,
    GET_DOGS,
    CLEAN_CARDS,
    SEARCH_DOGS_BY_NAME,
    // FILTER_BY_CREATION,
    FILTER_BY_TEMPERAMENTS,
    // PAGE_DOGS,
    ORDER_BY_WEIGHT,
    // ORDER_BY_WEIGHT_MAX,
    CREATE_DOG,
    GET_TEMPERAMENTS,
    ORDER_BY_NAME, 
    FILTER_BY_CREATION} from "./action-types";

const initialState = {
    pageDogs: [],
    dogs: [],
    // dogsMax: [],
    // dogsMin:[],
    dogsMax: '',
    dogsMin:'',
    details: {},
    copyDogs: [],
    temperaments: [],   
    filters: { origin: "allDogs", temperaments: "allDogs"},

};

const rootReducer = (state= initialState, action) => {
    let allDogs = state.dogs

    switch(action.type) {
        case GET_DOGS:
            return {
                ...state, // copia del estado, para no perderlo
                dogs: action.payload, // action. payload me trae todo el array con los dogs. Estoy haciendo que en mi estado global se me guarden todos los dogs que son la respuesta de la api
                copyDogs: action.payload
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

        case SEARCH_DOGS_BY_NAME:
            return {
               ...state,
                 copyDogs: action.payload,
                     };


        case ORDER_BY_NAME:
        return {
            ...state,
            copyDogs: [...state.copyDogs].sort((a,b) => {
            if (action.payload === 'Ascendent') {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            } else { 
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            }
            })
        }


            case ORDER_BY_WEIGHT:
                const sortedWeight = state.dogs.slice().sort(function(a, b) {
                  if (parseInt(a.weightMin) < parseInt(b.weightMin)) {
                    return action.payload === 'WeightMin' ? -1 : 1;
                  }
                  if (parseInt(a.weightMin) > parseInt(b.weightMin)) {
                    return action.payload === 'WeightMin' ? 1 : -1;
                  }
                  return 0;
                });
                return {
                  ...state,
                  copyDogs: sortedWeight,
                };

//otra forma de hacerlo
                // case ORDER_BY_WEIGHT:
                //     const sortedWeight = action.payload === 'WeightMin'
                //       ? state.dogs.sort(function (a, b) {
                //           return parseInt(a.weightMin) - parseInt(b.weightMin);
                //         })
                //       : state.dogs.sort(function (a, b) {
                //           return parseInt(b.weightMin) - parseInt(a.weightMin);
                //         });
                  
                //     return {
                //       ...state,
                //       copyDogs: sortedWeight,
                //     };

            // La comparación de los números se realiza utilizando los operadores matemáticos < y > y devuelve un valor numérico que indica la posición relativa de los perros en la lista ordenada. Si el peso del primer perro es mayor que el peso del segundo perro, la función devuelve un valor positivo (1); si el peso del segundo perro es mayor que el peso del primer perro, la función devuelve un valor negativo (-1); y si los pesos son iguales, la función devuelve 0.

            
        case GET_TEMPERAMENTS:
        return {
            ...state,
            temperaments: action.payload,
        };

        case FILTER_BY_TEMPERAMENTS:
            // if (state.dogs.length < state.copyDogs.length) {
            //     return {
            //         ...state,
            //         dogs: state.copyDogs
            //     }
            // }
            if (action.payload === "All") {
                return {
                    ...state,
                    dogs: state.copyDogs
                }
            }
            const filteredTemperaments = state.dogs.filter((element) => 
                element.temperaments?.includes(action.payload) ? element : null
            )
            return {
               ...state,
                copyDogs: filteredTemperaments
            }
                    
         
            case FILTER_BY_CREATION:
                    allDogs = state.filters.temperaments === "allDogs"
                    ? [...allDogs]
                    : allDogs.filter(element => element.temperaments?.toUpperCase().includes(state.filters.temperaments.toUpperCase()));
                
                if (action.payload !== "allDogs") {
                    allDogs = action.payload === "Api"
                    ? allDogs.filter(dog => !isNaN(dog.id))
                    : allDogs.filter(dog => isNaN(dog.id))
                } 
                
                return {
                    ...state,
                    copyDogs: [ ...allDogs ],
                    filters: { ...state.filters, origin: action.payload }
                }

                case CREATE_DOG:
                    return {
                      ...state,
                      ...action.payload
                    };
                
        default:
            return {...state} // una copia del estado inicial
    }
}


export default rootReducer;