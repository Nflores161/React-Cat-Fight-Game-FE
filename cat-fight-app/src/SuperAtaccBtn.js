import React from 'react'

const SuperAttaccBtn = ({playerTurn, superAttaccUsed, superAttacc}) => {

  if (playerTurn === true && superAttaccUsed === false)  {
  return <button onClick={() => superAttacc()}>SuperATTACC</button>
  } else {
    return null
  }
}
export default SuperAttaccBtn