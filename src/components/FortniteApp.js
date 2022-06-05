import React, { useState } from 'react'
import AddPlayer from './AddPlayer';
import Player from './Player';
import { Container, Row } from 'react-bootstrap';


export default function FortniteApp() {

    const [ players, setPlayer ] = useState([]);

    return (
    <>
        <h2>FortniteApp</h2>
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
