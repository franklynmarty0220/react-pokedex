import React from 'react';
import PokeCard from "./pokecard"
import "./pokedex.css";

const Pokedex = ({cards}) => {
    return(
        <>
            <div className="pokedex">
                <h2 className="pokedex-title"> Pokedex</h2>
                <div className="pokedex-cards">
                    {cards.map(c =>(
                        <PokeCard id={c.id} name={c.name} type={c.type} 
                        base_experience={c.base_experience}/>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Pokedex








