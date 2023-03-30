import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogs, cleanCards } from "../../redux/action"; //me traigo la action
import Card from "../7Card/Card";
import React from "react";
import styles from "./AllCards.module.css";
import gif from "../13Extras/loa.gif";
import { useState } from "react";

const AllCards = () => {
  const dispatch = useDispatch();

  const dogs = useSelector((state) => state.pageDogs); //trae info del estdo global
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); //  cantidad de tiempo que se muestre el GIF
    return () => clearTimeout(timer);
  }, []);


  useEffect(()=>{
    if(!dogs || dogs.length === 0) 
    dispatch(getDogs())
},[dogs, dispatch])

// el if(...) dispatch(getDogs()) es para que solo haga el dispatch si no tenes perros sino siempre que entras al home se hace el dispatch y carga todo de nuevo
//  y sacas el return por que sino cada vez que entras al detalle se borran todos los perros



  //   useEffect(() => {
  //   //cuando se monta
  //   dispatch(getDogs()); //le digo que busque la info de getDogs
  //   return () => dispatch(cleanCards()); //cuando desmonto el componente deja un arr vacio, unmount
  // }, [dispatch]);

  // const handleDelete = (id) => {
  //   dispatch(deleteDog(id));
  //   dispatch(getDogs())
  // };


  return (
    <div>
      <div className={styles.cards}>
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <Card
              name={dog.name}
              id={dog.id}
              key={dog.id}
              image={dog.image}
              weightMin={dog.weightMin}
              weightMax={dog.weightMax}
              heightMin={dog.heightMin}
              heightMax={dog.heightMax}
              breed_group={dog.breed_group}
              origin={dog.origin}
              temperaments={dog.temperaments}
            />
          ))
        ) : (
          <div class="loading">
            <img src={gif} alt="Loading..." className={styles.gif}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCards;

