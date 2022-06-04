import React, { useState } from 'react'

export default function FortniteApp() {

    const [ players, setPlayers ] = useState(["s0mber_"]);

    return (
    <>
        <div>FortniteApp</div>
        <ol>
            {
                players.map(player=>(
                    <li>{player}</li>                    
                ))
            }
        </ol>
    </>

  )
}
