import React from 'react';
import './pokecard.css'

const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.'

const PokeCard = ({id, name, type, base_experience})=>{
    return(
        <>
            <div className = "pokecard">
                <div className = "pokecard-name">{name}</div>
                <img className = "pokecard-img" src = {Poke_API} />
                <p className = "pokecard-type">Type: {type}</p>
                <p className = "pokecard-exp">Exp: {base_experience}</p>
            </div>
        </>
    )
}

export default PokeCard;