import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { getDogs, cleanCards } from "../../redux/action"; //me traigo la action 
import Card from "../7Card/Card";
import React from 'react';
import styles from './AllCards.module.css'
import gif from "../13Extras/loa.gif"
import { useState } from "react";





const AllCards = () => {

    const dispatch = useDispatch()
    
    // const dogs = useSelector(state => state.order);

    // const dogs = useSelector((state)=> state.dogs)//trae info del estdo global
    const dogs = useSelector((state)=> state.pageDogs)//trae info del estdo global
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000); //  cantidad de tiempo que se muestre el GIF
        return () => clearTimeout(timer);
      }, []);



    useEffect(() =>{ //cuando se monta
        dispatch(getDogs()) //le digo que busque la info de getDogs
        return () => dispatch(cleanCards()) //cuando desmonto el componente deja un arr vacio, unmount
 
    },[dispatch])

    // console.log(allDogs);

       

    return(
        
        <div>
           
            <div className={styles.cards}>
            {dogs.length > 0 ? dogs.map(dog => 
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
                            // createInDb={dog.createInDb} // agregue el createId en modelo, y en el post
                        />
                    )
                    :
                    <div class="loading">
                    <img src={gif} alt="Loading..." />
                   </div>  
                    // <h1>Loading...</h1>
                }
            </div>
        </div>
    )}

   
export default AllCards;


// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// // import { getAllPokemons } from '../../redux/action';
// import CardPokemon from '../CardPokemon/CardPokemon';
// import style from './AllCardsPokemons.module.css'


// const AllCardsPokemons = () => {
//     // const dispatch= useDispatch
//     const pokemons = useSelector(state => state.copyPokemons)


//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(12);
//     const pages = [];
//     for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
//         pages.push(i);
//     };
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

//     const handleClick = (event) => {
//         setCurrentPage(Number(event.target.id))
//     };

//     const renderPageNumbers = pages.map(number => {
//         return (
//             <button className={style.listItem} key={number} id={number} onClick={handleClick}>
//                 {number}
//             </button>
//         )
//     });
// //     <div className={style.ulContainer}>
// //     <ul className={style.unorganizedList}>{renderPageNumbers}</ul>
// // </div>

//         return (
//             <div>
            
//             <div className={style.AllCards}>
                
               
//             {/* {pokemons.length > 0 ? pokemons.map(element=>  */}
//             {pokemons.length > 0 ? currentItems.map(element=> 
//             <CardPokemon
//             key= {element?.id}
//             id= {element?.id}
//             name= {element?.name}
//             image= {element?.image}
//             types= {element?.types}
//             />
            
//             )
//             : <h1>Loading...</h1>}
//            </div>
//            <ul className={style.unorganizedList}>{renderPageNumbers}</ul>
//             </div>
//         )


// }

// export default AllCardsPokemons;