import React, { useEffect, useState } from 'react'
import AddPlayer from './AddPlayer';
import Player from './Player';
// import logoImg from '../images/logo_n.jpg';

export default function FortniteApp() {

    const [ players, setPlayer ] = useState([]);

    useEffect(()=>{

      const playersTmp = localStorage.getItem('players');
      setPlayer(playersTmp.split(','));
    
      setInterval(()=>{
        console.log("mi intervalo");
        const playersTmp = localStorage.getItem('players');
        setPlayer(playersTmp.split(','));
      }, 60000);
    }, []);
    
    return (
    <>
        <h2 className='title_app'>Comparador</h2>
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
