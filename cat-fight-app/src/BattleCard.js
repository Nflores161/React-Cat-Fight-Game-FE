import React from 'react'

const BattleCard = (props) => {

    return(
        <div>
            <h4>{props.cat.name}</h4>
            <img src={props.cat.image} alt={props.cat.name}/>
            <p>Power: {props.cat.power} Attacc: {props.cat.attacc}</p>
        </div> 
    )
}

export default BattleCard