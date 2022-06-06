import React, { useState } from 'react'
import AddPlayer from './AddPlayer';
import Player from './Player';
// import logoImg from '../images/logo_n.jpg';

export default function FortniteApp() {

    const [ players, setPlayer ] = useState([]);

    return (
    <>
        <h2 className='title_app'>Fortnite Comparador</h2>
        <hr/>
        <AddPlayer setPlayer={setPlayer}/>
        <div className='grid'>
          {
            players.map(player=>(
              <Player key={player} player={player}/>
            ))
          }
        </div>

    </>

  )
}
