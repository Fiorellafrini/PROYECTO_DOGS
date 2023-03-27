import {
  CLEAN_DETAILS,
  GET_DETAILS,
  GET_DOGS,
  CLEAN_CARDS,
  SEARCH_DOGS_BY_NAME,
  // DELETE_DOG,
  FILTER_BY_TEMPERAMENTS,
  PAGE_DOGS,
  ORDER_BY_WEIGHT,
  CREATE_DOG,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  FILTER_BY_ORIGIN,
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
      // console.log("Details received:", action.payload);
      return {
        ...state,
        details: action.payload,
      };
    case CLEAN_DETAILS: //piso el valor de detailñs con un obj vacio
      return {
        ...state,
        details: {},
      };
    case CLEAN_CARDS:
      return {
        ...state,
        dogs: [],
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
        if (parseInt(a.weightMin) < parseInt(b.weightMin)) {
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
      let filteredDogs = state.dogs.filter((dog) => true); // inicializa el filtro con todos los perros
      if (action.payload !== "All") {
        filteredDogs = state.dogs.filter((dog) =>
          dog.temperaments?.includes(action.payload)
        );
      }
      return {
        ...state,
        copyDogs: filteredDogs,
      };

    //"FILTER_BY_TEMPERAMENTS".
    // let filteredDogs = state.dogs.filter(dog => true);
    // Esta línea inicializa una variable filteredDogs con una copia del array de perros existente en el estado actual.
    // La función filter() se utiliza para crear un nuevo array a partir del array original, seleccionando sólo los elementos que cumplen una determinada condición. En este caso, la condición es simplemente que todos los perros serán seleccionados (ya que se pasa la función () => true como argumento).
    // if (action.payload !== "All") { ... }
    // Esta línea comprueba si el valor del "payload" de la acción es diferente a la cadena "All". Si es así, se procede a filtrar los perros según el temperamento indicado en el "payload".
    // filteredDogs = state.dogs.filter(dog => dog.temperaments?.includes(action.payload));
    // Si el valor del "payload" no es "All", esta línea crea un nuevo array de perros, utilizando la función filter().
    // En cada iteración del bucle, se comprueba si el array de temperamentos del perro actual (dog.temperaments) contiene el valor de temperamento indicado en el "payload" de la acción (action.payload).
    // El operador ?. se utiliza para comprobar si el array de temperamentos existe (es decir, no es undefined), antes de intentar llamar al método includes() en él.
    // return { ...state, copyDogs: filteredDogs };
    // Finalmente, se devuelve un nuevo objeto de estado que contiene una copia de todo el estado anterior (...state), pero con el array de perros reemplazado por el array filtrado (copyDogs: filteredDogs).
    // En resumen, este código se encarga de filtrar los perros según el temperamento seleccionado por el usuario en la aplicación, y actualizar el estado de la aplicación con el nuevo array de perros filtrados.

    case FILTER_BY_ORIGIN:
      let allDogs = state.dogs;
      if (action.payload !== "allDogs") {
        allDogs =
          action.payload === "Api"
            ? allDogs.filter((dog) => !isNaN(dog.id)) //!ISNan es un num
            : allDogs.filter((dog) => isNaN(dog.id)); // ISNan no es un num
      }
      return {
        ...state,
        copyDogs: [...allDogs], //EL ARRAY ES LA LISTA FILTRADA
      };

    // Luego, si action.payload no es "allDogs", se filtra la lista de perros según el valor de action.payload.
    // Si action.payload es "Api", se filtran los perros que tienen un id numérico (es decir, los perros cargados desde la API), y si action.payload es "Created", se filtran los perros que no tienen un id numérico (es decir, los perros creados localmente en la aplicación).
    // Finalmente, se establece la lista filtrada como copyDogs.

    case CREATE_DOG:
      return {
        ...state,
        ...action.payload,
      };

    // case DELETE_DOG:
    //   return {
    //     ...state,
    //     dogs: state.dogs.filter((dog) => dog.id !== action.payload),
    //     copyDogs: state.copyDogs.filter((dog) => dog.id !== action.payload),
    //   };

    // case DELETE_DOG:
    //     return {
    //       ...state,
    //       copyDogs: state.copyDogs.filter(dogs => dogs.id.toString() !== action.payload.toString())
    //     };

    // El filter()método se utiliza para crear una nueva matriz de perros que excluye al perro con el ID coincidente. El filter()método iterará a través de cada perro en la copyDogsmatriz y solo incluirá los perros que no tengan una ID que coincida con el action.payloadvalor. El action.payloadvalor se convierte en una cadena utilizando toString()el método para garantizar la coherencia de tipos.

    case PAGE_DOGS:
      return {
        ...state,
        pageDogs: [
          ...state.copyDogs.slice(action.payload.start, action.payload.end),
        ],
      };

    default:
      return { ...state }; // una copia del estado inicial
  }
};

export default rootReducer;
