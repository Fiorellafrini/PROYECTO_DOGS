import styles from "../6Create/Create.module.css";
import { useState } from "react";
import { useEffect } from "react";
import validation from "./Validation";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDog, getTemperaments } from "../../redux/action";
import { useHistory } from "react-router-dom";


const Create = () => {
  //Para traerme los temperaments
  const dispatch = useDispatch();
  const allTemperament = useSelector((state) => state.temperaments);
  const history = useHistory();
  // const [loading, setLoading] = useState(true);

  const findTemperamentId = (name) => {
    const temperament = allTemperament.find((t) => t.name === name);
    return temperament ? temperament.id : null;
  };

  //El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.


  useEffect(() => {
    if (allTemperament.length < 1) {
      dispatch(getTemperaments());
    }
  }, [dispatch]);

  //PARA CONTROLAR EL FORMULARIO TENGO QUE TRABAJAR CON UN ESTADO GLOBAL

  const [input, setInput] = useState({
    //esto es un estado local, que va a ser un obj con las siguientes propiedades
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    temperaments: [],
    life_span: "",
  });

  //Validacion , se crea un nvo estado para encontrar errores en el formulario
  const [error, setErrors] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    temperaments: [],
    life_span: "",
  });

  // Esta función toma el nombre del temperamento como argumento y devuelve el id correspondiente si lo encuentra en el array allTemperament. Si no lo encuentra, devuelve null.

  // Luego, en la función handleSelectChange, puedes llamar a esta función para obtener el id del temperamento seleccionado y agregarlo al array temperaments del estado input:

  const handleTemperament = (e) => {
    const temperamentName = e.target.value;
    const temperamentId = findTemperamentId(temperamentName);
    if (temperamentId) {
      setInput({
        ...input,
        temperaments: [...input.temperaments, temperamentId],
      });
    }
  };
  

  //Controlador de evento
  const hanbleInputChange = (event) => {
    //cada vez que haya un cambio en el input se ejecuta  un event que lo maneja esta fn
    setInput({
      ...input, //hago una copia del estado para no perder las props
      [event.target.name]: event.target.value, // depende que value esta usando el usuario, es el value que hago. hago los corchetes pq no se en que input esta escribiendo el usuario
    }); //event es un obj enorme con muchas props. y una de esas es target y target es otro obj
    setErrors(
      //voy a setear el estado de error y le voy a ir pasando todo lo que pasa en el input
      validation({
        ...input, // va a tener una copia de input
        [event.target.name]: event.target.value, //y le mando esto para que se vaya modificando la propiedad de acuerdo donde esta el ussuario
      })
    );
  };

  //hago un onclose para eliminar los temp  que no quiero cuando los selecciono
//   const onclose = (event) => {
//     event.preventDefault();
//     const newTemp = input.temperaments.filter(
//       (temp) => temp !== event.target.value
//     );
//     setInput({
//       ...input,
//       temperaments: newTemp,
//     });
//   };


  const handleDelete = (element) => {
    setInput({
      ...input,
      temperaments: input.temperaments.filter((temperaments) => temperaments !== element),
    });
  }


  //para crear el perro
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDog(input)); // le paso el input pq es lo q creo el usuario
    alert("Created successfully");
      setInput({ // para que luego de llenar los datos y apretar el create, se seteen los datos, es decir q quede todo vacio
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        temperaments: [],
        life_span: ""

      })
    history.push("/home") //luego de crear vaya a home 
  };

  //conecto mi estado local con los input con la propiedad value , bindeo el value con el usestate de arriba value={input.name}
  //uso onchange para poder guardar la informacion del usuario
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        

        <h1 className={styles.inputTitulo}>FORM TO CREATE DOG </h1>

        <br></br>


        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            className={styles.inputName}
            type="text"
            name="name"
            // autoComplete="off"
            value={input.name}
            onChange={hanbleInputChange}
          ></input>
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          {/* aca renderizo. si tengo algo en input entonces muestro una etiqueta p con el mensaje */}


          {/* / -  Altura **(diferenciar entre altura mínima y máxima de la raza)**. */}
          <label htmlFor="heightMin" className={styles.label}>Height Min:</label>
          <input
            className={styles.inputName}
            type="number"
            name="heightMin"
            value={input.heightMin}
            onChange={hanbleInputChange}
          ></input>
          {error.heightMin && <p style={{ color: "red" }}>{error.heightMin}</p>}

          <label htmlFor="heightMax" className={styles.label}>Height Max:</label>
          <input
            className={styles.inputName}
            type="number"
            name="heightMax"
            value={input.heightMax}
            onChange={hanbleInputChange}
          ></input>
          {error.heightMax && <p style={{ color: "red" }}>{error.heightMax}</p>}

          {/* Peso **(diferenciar entre peso mínimo y máximo de la raza)**. */}
          <label htmlFor="weightMin" className={styles.label}>Weight Min:</label>
          <input
            className={styles.inputName}
            type="number"
            name="weightMin"
            value={input.weightMin}
            onChange={hanbleInputChange}
          ></input>
          {error.weightMin && <p style={{ color: "red" }}>{error.weightMin}</p>}

          <label htmlFor="weightMax" className={styles.label}>Weight Max:</label>
          <input
            className={styles.inputName}
            type="number"
            name="weightMax"
            value={input.weightMax}
            onChange={hanbleInputChange}
          ></input>
          {error.weightMax && <p style={{ color: "red" }}>{error.weightMax}</p>}

          <label htmlFor="life_span" className={styles.label}>Life Span: </label>
          <input
            className={styles.inputName}
            type="text"
            name="life_span"
            value={input.life_span}
            onChange={hanbleInputChange}
          ></input>
          {error.life_span && <p style={{ color: "red" }}>{error.life_span}</p>}

          {/* -  Posibilidad de seleccionar/agregar varios temperamentos en simultáneo. */}
          <label htmlFor="temperaments" className={styles.label}>Temperaments </label>
          {/* NO TENGO INPUT PQ TENGO QUE SELECCIONAR, NO ESCRIBIR  */}
          <select
            name="filterByTemperament"
            className={styles.selectT}
            value={""}
            onChange={(event) => handleTemperament(event)}
          >
            <option key="Temperaments" value="" hidden>
             
            </option>

            {allTemperament.length > 0 &&
              allTemperament.map((temperaments, i) => {
                return (
                  <option key={temperaments.name + i} value={temperaments.name}>
                    {temperaments.name}
                  </option>
                );
              })}
          </select>
          {error.temperaments && <p style={{ color: "red" }}>{error.temperaments}</p>}


          <div className={styles.divTemp}>
            {input.temperaments?.length > 0 &&
              input.temperaments?.map((temp) => {
                return (
                  <span>
                       <button value={temp}
                        className={styles.button} onClick={() => handleDelete(temp)}>X</button>
                    {temp + " "}
                    {/* <button
                      value={temp}
                      onClick={(event) => onclose(event)}
                      className={styles.closeButton}
                    >
                      X
                    </button>{" "}
                    {temp + " "} */}
                  </span>
                );
              })}
          </div>

            <button className={styles.btn}
                type="submit"
                onClick={hanbleInputChange}
         
                >
                CREATE ❤
            </button>

            <button className={styles.btn1}>
                <Link to="/home" >
                     HOME
                 </Link>
            </button>


        </form>
      </div>


    </div>
  );
};

export default Create;
