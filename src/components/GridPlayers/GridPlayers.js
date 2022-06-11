import React from 'react'
import Player from '../GridPlayers/Player/Player';

export const GridPlayers = ({players, setPlayer}) => {
  return (
    <div className='grid'>
    {
      players.map(player=>(
        <Player setPlayer={setPlayer} key={player} player={player}/>
      ))
    }
  </div>
  )
}
