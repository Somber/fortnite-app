import React from 'react'
import Player from '../GridPlayers/Player/Player';

export const GridPlayers = ({players, setPlayers}) => {
  return (
    <div className='grid'>
    {
      players.map(player=>(
        <Player key={player.name} player={player} setPlayers={setPlayers}/>
      ))
    }
  </div>
  )
}
