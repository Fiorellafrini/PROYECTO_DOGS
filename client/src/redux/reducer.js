import {
  CLEAN_DETAILS,
  GET_DETAILS,
  GET_DOGS,
  CLEAN_CARDS,
  SEARCH_DOGS_BY_NAME,
  FILTER_BY_TEMPERAMENTS,
  PAGE_DOGS,
  ORDER_BY_WEIGHT,
  CREATE_DOG,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  FILTER_BY_ORIGIN,
  // DELETE_DOG,
} from "./action-types";

const initialState = {
  dogs: [],
  dogsMax: "",
  dogsMin: "",
  details: {},
  copyDogs: [],
  temperaments: [],
  pageDogs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_DOGS:
      return {
        ...state, // copia del estado, para no perderlo
        dogs: action.payload, // action. payload me trae todo el array con los dogs. Estoy haciendo que en mi estado global se me guarden todos los dogs que son la respuesta de la api
        copyDogs: action.payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case CLEAN_DETAILS: //piso el valor de details con un obj vacio
      return {
        ...state,
        details: {},
      };

    case CLEAN_CARDS:
      return {
        ...state,
        copyDogs: [],
      };

    case SEARCH_DOGS_BY_NAME:
      return {
        ...state,
        copyDogs: action.payload,
      };

    case ORDER_BY_NAME:
      return {
        ...state,
        copyDogs: [...state.copyDogs].sort((a, b) => {
          //se crea una nueva instancia del array copyDogs
          if (action.payload === "Ascendent") {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          } else {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          }
        }),
      };

    case ORDER_BY_WEIGHT:
      const sortedWeight = state.copyDogs.slice().sort(function (a, b) {
        //slice() crea una copia de la matriz copyDogs
        if (parseInt(a.weightMin) < parseInt(b.weightMin)) {
          //parseInt convierto una cadena en numero
          return action.payload === "WeightMin" ? -1 : 1;
        }
        if (parseInt(a.weightMin) > parseInt(b.weightMin)) {
          return action.payload === "WeightMin" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        copyDogs: sortedWeight,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case FILTER_BY_TEMPERAMENTS:
      let filteredDogs = state.dogs; // inicializa el filtro con todos los perros
      if (action.payload !== "All") {
        filteredDogs = state.dogs.filter((dog) =>
          dog.temperaments?.includes(action.payload)
        );
      }  
      return {
        ...state,
        copyDogs: filteredDogs,
        pageDogs: filteredDogs, // también actualiza la variable pageDogs
      };
      
    // case FILTER_BY_ORIGIN:
    //   let allDogs = state.dogs;
    //   if (action.payload !== "allDogs") {
    //     allDogs =
    //       action.payload === "Api"
    //         ? allDogs.filter((dog) => typeof dog.id === "number")
    //         : allDogs.filter((dog) => typeof dog.id !== "number");
    //   }
    //   return {
    //     ...state,
    //     pageDogs: [...allDogs],
        
    //   };


      case FILTER_BY_ORIGIN:
        let allDogs = state.dogs;
        if (action.payload !== "allDogs") {
          allDogs =
            action.payload === "Api"
              ? allDogs.filter((dog) => typeof dog.id === "number")
              : allDogs.filter((dog) => typeof dog.id !== "number");
        }
        // Aplicar paginación en los perros filtrados por origen
        const start = 0;
        const end = 8;
        const pageDogs = allDogs.slice(start, end);
        return {
          ...state,
          pageDogs: [...pageDogs],
        };
      


    case CREATE_DOG:
      return {
        ...state,
        ...action.payload,
      };

    // case PAGE_DOGS:
    //   return {
    //     ...state,
    //     pageDogs: [
    //       ...state.copyDogs.slice(action.payload.start, action.payload.end),
    //     ],
    //   };


      case PAGE_DOGS:
        const itemsPerPage = 8; // cantidad de elementos por página
        const totalItems = state.copyDogs.length; // cantidad total de elementos a paginar
        const totalPages = Math.ceil(totalItems / itemsPerPage); // cantidad total de páginas, redondeada hacia arriba
      
        return {
          ...state,
          pageDogs: [
            ...state.copyDogs.slice(action.payload.start, action.payload.end),
          ],
          totalPages: totalPages,
        };
      


    // case DELETE_DOG:
    //   return {
    //     ...state,
    //     pageDogs: state.copyDogs.filter((dog) => dog.id !== action.payload),
    //   };

    default:
      return { ...state }; // una copia del estado inicial
  }
};

export default rootReducer;
