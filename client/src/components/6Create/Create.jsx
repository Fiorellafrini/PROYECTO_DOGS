import styles from "../6Create/Create.module.css";
import { useState } from "react";
import { useEffect } from "react";
import validation from "./Validation";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDog, getTemperaments } from "../../redux/action";
import { useHistory } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const allTemperament = useSelector((state) => state.temperaments);
  const allDogs =useSelector((state) => state.pageDogs)

  const history = useHistory();

  useEffect(() => {
    if (allTemperament.length < 1) {
      dispatch(getTemperaments());
    }
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    bred_for: "",
    temperaments: [],
  });

  const [error, setErrors] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    bred_for: "",
    temperaments: [],
  });

  const handleTemperament = (event) => {
    setInput({
      ...input,
      temperaments: [...input.temperaments, event.target.value],
    });
  };

  // Controlador de evento
  const hanbleInputChange = (event) => {
    //cada vez que haya un cambio en el input se ejecuta  un event que lo maneja esta fn
    setInput({
      ...input, //hago una copia del estado para no perder las props
      [event.target.name]: event.target.value, // depende que value esta usando el usuario, es el value que hago. hago los corchetes pq no se en que input esta escribiendo el usuario
    }); //event es un obj enorme con muchas props. y una de esas es target y target es otro obj
    nameExist(input.name)
    setErrors(
      //voy a setear el estado de error y le voy a ir pasando todo lo que pasa en el input
      validation({
        ...input, // va a tener una copia de input
        [event.target.name]: event.target.value, //y le mando esto para que se vaya modificando la propiedad de acuerdo donde esta el ussuario
      })
    );
  };

  const hasError = () => {
    const errors = validation(input); // obtiene los errores de validación
    return Object.keys(errors).length > 0; // devuelve true si hay errores, false si no los hay
  };

  const handleDelete = (element) => {
    setInput({
      ...input,
      temperaments: input.temperaments.filter(
        (temperaments) => temperaments !== element
      ),
    });
  };

  //para crear el perro
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDog(input)); 
    alert("Created successfully");
    setInput({
      // para que luego de llenar los datos y apretar el create, se seteen los datos, es decir q quede todo vacio
      name: "",
      heightMin: "",
      heightMax: "",
      weightMin: "",
      weightMax: "",
      life_span: "",
      bred_for: "",
      temperaments: [],
    });
    history.push("/home"); 
  };

  const nameExist = (name) => {
    const nameExist = allDogs.find((elemnt) => elemnt.name === name);
    if (nameExist) {
      alert("pokemon alredy exist, Change the name");
      setInput({
        ...input,
        name: "",
      });
    }
  };





  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.inputTitulo}>FORM TO CREATE DOG </h1>

        <br></br>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            className={styles.inputName}
            type="text"
            name="name"
            value={input.name}
            onChange={hanbleInputChange}
          ></input>
          {error.name && <p className={styles.warning}>{error.name}</p>}

          <label htmlFor="heightMin" className={styles.label}>
            Height Min:
          </label>
          <input
            className={styles.inputName}
            type="number"
            name="heightMin"
            value={input.heightMin}
            onChange={hanbleInputChange}
          ></input>
          {error.heightMin && (
            <p className={styles.warning}>{error.heightMin}</p>
          )}

          <label htmlFor="heightMax" className={styles.label}>
            Height Max:
          </label>
          <input
            className={styles.inputName}
            type="number"
            name="heightMax"
            value={input.heightMax}
            onChange={hanbleInputChange}
          ></input>
          {error.heightMax && (
            <p className={styles.warning}>{error.heightMax}</p>
          )}

          <label htmlFor="weightMin" className={styles.label}>
            Weight Min:
          </label>
          <input
            className={styles.inputName}
            type="number"
            name="weightMin"
            value={input.weightMin}
            onChange={hanbleInputChange}
          ></input>
          {error.weightMin && (
            <p className={styles.warning}>{error.weightMin}</p>
          )}

          <label htmlFor="weightMax" className={styles.label}>
            Weight Max:
          </label>
          <input
            className={styles.inputName}
            type="number"
            name="weightMax"
            value={input.weightMax}
            onChange={hanbleInputChange}
          ></input>
          {error.weightMax && (
            <p className={styles.warning}>{error.weightMax}</p>
          )}

          <label htmlFor="life_span" className={styles.label}>
            Life Span:{" "}
          </label>
          <input
            className={styles.inputName}
            type="text"
            name="life_span"
            value={input.life_span}
            onChange={hanbleInputChange}
          ></input>
          {error.life_span && (
            <p className={styles.warning}>{error.life_span}</p>
          )}

          <label htmlFor="bred_for" className={styles.label}>
            {" "}
            Bred for:{" "}
          </label>
          <input
            className={styles.inputName}
            type="text"
            name="bred_for"
            value={input.bred_for}
            onChange={hanbleInputChange}
          ></input>
          {error.bred_for && <p className={styles.warning}>{error.bred_for}</p>}

          <label htmlFor="temperaments" className={styles.label}>
            Temperaments
          </label>
          <select
            name="filterByTemperament"
            className={styles.selectT}
            value={" "}
            onChange={(selection) => handleTemperament(selection)}
            // onChange={handleTemperament}
          >
            {allTemperament.map((temp) => (
              <option value={temp.id}>
                {temp.name} - {temp.id}
              </option>
            ))}
          </select>
          {error.temperaments && (
            <p className={styles.warning}>{error.temperaments}</p>
          )}

          <div className={styles.divTemp}>
            {input.temperaments?.length > 0 &&
              input.temperaments?.map((temp) => {
                return (
                  <span>
                    <button
                      value={temp}
                      className={styles.button}
                      onClick={() => handleDelete(temp)}
                    >
                      X
                    </button>
                    {temp + " "}
                  </span>
                );
              })}
          </div>

          <button
            className={styles.btn}
            type="submit"
            disabled={hasError()} // deshabilita el botón si hay errores
          >
            CREATE ❤
          </button>

          {/* <button
            className={styles.btn}
            type="submit"
            disabled={ // que el input esta deshalitado si :
              input.name === "" ||
              input.heightMin === "" ||
              input.heightMax === "" ||
              input.weightMin === "" ||
              input.weightMax === "" ||
              input.life_span === "" ||
              input.bred_for === "" ||
              input.temperaments.length === 0 ||
              input.temperaments.length > 4 
            }
          >
            CREATE ❤
          </button> */}

          <button className={styles.btn1}>
            <Link to="/home">RETURN</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
