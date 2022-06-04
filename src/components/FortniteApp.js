import React, { useState } from 'react'
import AddPlayer from './AddPlayer';
import Player from './Player';


export default function FortniteApp() {

    const [ players, setPlayer ] = useState([]);

    return (
    <>
        <h2>FortniteApp</h2>
        <hr/>
        <AddPlayer setPlayer={setPlayer}/>
        <ol>
            {
                players.map(player=>(
                    <Player key={player} player={player}/>
                ))
            }
        </ol>
    </>

  )
}
