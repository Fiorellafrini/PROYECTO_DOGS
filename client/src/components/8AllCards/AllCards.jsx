import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogs, cleanCards } from "../../redux/action"; //me traigo la action
import Card from "../7Card/Card";
import React from "react";
import styles from "./AllCards.module.css";
import gif from "../13Extras/loa.gif";
import { useState } from "react";

const AllCards = ({onClose}) => {
  const dispatch = useDispatch();


  const dogs = useSelector((state) => state.pageDogs); //trae info del estdo global
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); //  cantidad de tiempo que se muestre el GIF
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    //cuando se monta
    dispatch(getDogs()); //le digo que busque la info de getDogs
    return () => dispatch(cleanCards()); //cuando desmonto el componente deja un arr vacio, unmount
  }, [dispatch]);

  // console.log(allDogs);


  // const handleDelete = (id) => {
  //   dispatch(deleteDog(id));
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
              // onClose={() => onClose(dog.id)}
              // handleDelete={handleDelete} // Agregamos la función handleDelete como prop
            />
          ))
        ) : (
          <div class="loading">
            <img src={gif} alt="Loading..." />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCards;

