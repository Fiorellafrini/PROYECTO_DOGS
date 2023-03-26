import AllCards from "../8AllCards/AllCards";
import React from "react";
import styles from "../1Home/Home.module.css"
import Paginado from "../12Paginado/Paginado";


const Home = () => {


  

    return(

        <div className={styles.body}>
   
                {/* <Paginado></Paginado> */}
                <AllCards></AllCards>
                <Paginado></Paginado>

          

        </div>
    )
}

export default Home;


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