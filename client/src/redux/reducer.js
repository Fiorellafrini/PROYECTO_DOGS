import { CLEAN_DETAILS,
   GET_DETAILS,
    GET_DOGS,
    CLEAN_CARDS,
    SEARCH_DOGS_BY_NAME,
    // FILTER_BY_CREATION,
    FILTER_BY_TEMPERAMENTS,
    // PAGE_DOGS,
    ORDER_BY_WEIGHT_MIN,
    ORDER_BY_WEIGHT_MAX,
    // CREATE_DOG,
    GET_TEMPERAMENTS,
    ORDER_BY_NAME } from "./action-types";

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
};

const rootReducer = (state= initialState, action) => {
    // let allDogs = state.dogs

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
                 dogs: action.payload,
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
            
          case ORDER_BY_WEIGHT_MIN:
            const dogsMin = state.dogs.filter((dog) => !isNaN (parseInt(dog.weight.split(' - ')[0]))); 
            const orderWeightMin = action.payload === "asc"
              ? dogsMin.sort((a, b) => parseInt(a.weight.split(' - ')[0]) > parseInt(b.weight.split(' - ')[0]) ? 1 : parseInt(a.weight.split(' - ')[0]) < parseInt(b.weight.split(' - ')[0]) ? -1 : 0)
              : dogsMin.sort((a, b) => parseInt(a.weight.split(' - ')[0]) > parseInt(b.weight.split(' - ')[0]) ? -1 : parseInt(a.weight.split(' - ')[0]) < parseInt(b.weight.split(' - ')[0]) ? 1 : 0);
            return {
              ...state,
              copyDogs: [...orderWeightMin],
            };
        
            case ORDER_BY_WEIGHT_MAX:
                const dogsMax = state.dogs.filter((dog) => !isNaN(parseInt(dog.weight.split(' - ')[1]))); 
                const orderWeightMax = action.payload === "asc"
                  ? dogsMax.sort((a, b) => parseInt(a.weight.split(' - ')[1]) > parseInt(b.weight.split(' - ')[1]) ? 1 : parseInt(a.weight.split(' - ')[1]) < parseInt(b.weight.split(' - ')[1]) ? -1 : 0)
                  : dogsMax.sort((a, b) => parseInt(a.weight.split(' - ')[1]) > parseInt(b.weight.split(' - ')[1]) ? -1 : parseInt(a.weight.split(' - ')[1]) < parseInt(b.weight.split(' - ')[1]) ? 1 : 0);
                return {
                  ...state,
                  copyDogs: [...orderWeightMax],
                };
    

            // En este ejemplo, la lista de perros se filtra primero para eliminar cualquier perro que tenga un valor de NaN en su propiedad weight. Luego, se ordena la lista filtrada. Si solo hay un perro con un valor de NaN en su propiedad weight, este perro se eliminará de la lista y no se incluirá en la lista ordenada.

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

          
                    
                 
        default:
            return {...state} // una copia del estado inicial
    }
}


export default rootReducer;