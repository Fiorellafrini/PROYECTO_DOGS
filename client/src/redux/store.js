import { createStore, applyMiddleware } from "redux"; //applyMiddleware nos permite hacer las peticiones a la api
import thunkMiddleware from "redux-thunk"; // es un middlewere para usar acciones asincronicas, es un traductor que ayuda a comunicar el client con el servidor 
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension"; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)) 
);// esta línea es para poder hacer peticiones a un server

export default store;
