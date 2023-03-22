import styles from "../6Create/Create.module.css"
import { useState } from "react"
import validation from "./Validation"
import { Link, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {createDog, getTemperaments} from "../../redux/action"
import { useEffect } from "react";

const Create = () => {

//Para traerme los temperaments
    const dispatch = useDispatch();
    const history = useHistory();
    const allTemperament = useSelector(state=>state.temperaments);

    useEffect(() => {
        if (allTemperament.length < 1) {
            dispatch(getTemperaments())
        }
    },[dispatch])




//PARA CONTROLAR EL FORMULARIO TENGO QUE TRABAJAR CON UN ESTADO GLOBAL

const [input, setInput] = useState({ //esto es un estado local, que va a ser un obj con las siguientes propiedades
    name: '',
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    temperaments: [],
    lifeSpan: "",
})


//Validacion , se crea un nvo estado para encontrar errores en el formulario 
const [error, setErrors] = useState({
    name: '',
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    temperaments: [],
    lifeSpan: "",
})


const handleTemperament = (event) => {
    event.preventDefault()
    const temp = input.temperaments.find((element) => element === event.target.value)
    if (!temp) {
        setInput({
            ...input,
            temperaments: [...input.temperaments, event.target.value]
        })
    }
}



//Controlador de evento
const hanbleInputChange = (event) => { //cada vez que haya un cambio en el input se ejecuta  un event que lo maneja esta fn
    setInput({
        ...input, //hago una copia del estado para no perder las props
        [event.target.name] : event.target.value // depende que value esta usando el usuario, es el value que hago. hago los corchetes pq no se en que input esta escribiendo el usuario
    })//event es un obj enorme con muchas props. y una de esas es target y target es otro obj
    setErrors( //voy a setear el estado de error y le voy a ir pasando todo lo que pasa en el input
        validation({
            ...input, // va a tener una copia de input
            [event.target.name] : event.target.value //y le mando esto para que se vaya modificando la propiedad de acuerdo donde esta el ussuario
        }) 
    )
}

//hago un onclose para eliminar los temp  que no quiero cuando los selecciono
const onclose = (event) => {
    event.preventDefault()
    const newTemp = input.temperaments.filter((temp) => temp !== event.target.value)
    setInput({
        ...input,
        temperaments: newTemp
    })
}

//para crear el perro 
const handleSubmit = (event) => {
    event.preventDefault()
    alert("Created successfully")
    dispatch(createDog(input)) // le paso el input pq es lo q creo el usuario
    history("/home")
}


//conecto mi estado local con los input con la propiedad value , bindeo el value con el usestate de arriba value={input.name}
//uso onchange para poder guardar la informacion del usuario
    return(
        

        <div className={styles.body}>

            <div className={styles.container}>

        <Link to= "/home" className={styles.btn1}>HOME</Link>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input  className={styles.input} type="text" name="name" value={input.name} onChange={hanbleInputChange}></input>
            {error.name && <p style={{color:"red"}}>{error.name}</p>} 
            {/* aca renderizo. si tengo algo en input entonces muestro una etiqueta p con el mensaje */}
            
            {/* / -  Altura **(diferenciar entre altura mínima y máxima de la raza)**. */}
            <label htmlFor="heightMin">Height Min</label>
            <input className={styles.input} type="text" name="heightMin" value={input.heightMin} onChange={hanbleInputChange}></input>
            {error.heightMin && <p style={{color:"red"}}>{error.heightMin}</p>}


            <label htmlFor="heightMax">Height Max</label>
            <input className={styles.input} type="text" name="heightMax" value={input.heightMax} onChange={hanbleInputChange}></input>
            {error.heightMax && <p style={{color:"red"}}>{error.heightMax}</p>}



            {/* Peso **(diferenciar entre peso mínimo y máximo de la raza)**. */}
            <label htmlFor="weightMin">Weight Min</label>
            <input className={styles.input} type="text" name="weightMin" value={input.weightMin} onChange={hanbleInputChange}></input>
            {error.weightMin && <p style={{color:"red"}}>{error.weightMin}</p>}


            <label htmlFor="weightMax">Weight Max</label>
            <input className={styles.input} type="text" name="weightMax" value={input.weightMax} onChange={hanbleInputChange}></input>
            {error.weightMax && <p style={{color:"red"}}>{error.weightMax}</p>}



            <label htmlFor="lifeSpan">Life Span </label>
            <input className={styles.input} type="text" name="lifeSpan" value={input.lifeSpan} onChange={hanbleInputChange}></input>
            {error.lifeSpan && <p style={{color:"red"}}>{error.lifeSpan}</p>}


            {/* -  Posibilidad de seleccionar/agregar varios temperamentos en simultáneo. */}
            <label htmlFor="temperaments">Temperaments</label>
            {/* <input className={styles.input} type="text" name="temperaments" value={input.temperaments} onChange={handleTemperament}></input>
            {error.temperaments && <p style={{color:"red"}}>{error.temperaments}</p>}  NO TENGO INPUT PQ TENGO QUE SELECCIONAR, NO ESCRIBIR */}
            <select name="filterByTemperament" value={""} onChange={(event) => handleTemperament(event)} >
                            <option key="Temperaments" value="" hidden>Select Temperament</option>
                            {allTemperament.length > 0 && allTemperament.map((temperaments, i) => {
                                return <option key={temperaments.name + i} value={temperaments.name}>{temperaments.name}</option>
                            })
                            }
                        </select>
                        <div className={styles.divTemp}>{input.temperaments?.length > 0 && input.temperaments?.map((temp) => {
                            return <span ><button value={temp} onClick={(event) => onclose(event)} className={styles.closeButton}>X</button> {temp + " "}</span>
                        })}</div>

        <button className={styles.btn} type="submit" onClick={hanbleInputChange}>CREATE</button>



        </form>
        </div>
        </div>
    )
}

export default Create;