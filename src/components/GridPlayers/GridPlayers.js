import React, { useState }from 'react'
import Player from '../GridPlayers/Player/Player';

export const GridPlayers = ({players, setPlayers, sizeCards}) => {

  const [drag, setDrag] = useState({dragItem:null, dragOverItem:null});

  return (
    <div className='grid'>
    {
      players.map(player=>(
        <Player 
          drag = {drag}
          setDrag = {setDrag}         
          key={player.name} 
          player={player} 
          setPlayers={setPlayers}
          players={players}
          sizeCards={sizeCards}/>
      ))
    }
  </div>
  )
}
