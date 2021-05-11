import React from 'react'

const CharacterCard = (props) => {
    return(
        <div>
            <h4>{props.cat.name}</h4>
            <img src={props.cat.image} alt={props.cat.name}/>
            <p>Power: {props.cat.power} Attacc: {props.cat.attacc}</p>
            <button onClick={() => {
                props.assignCat(props.cat)
                props.history.push("/battleground")
            }}>Choose Your Warrior</button>
        </div>
    )
}

export default CharacterCard