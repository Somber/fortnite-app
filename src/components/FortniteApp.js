import React, { useEffect, useState } from 'react'
import AddPlayer from './AddPlayer';
import Player from './Player';
// import logoImg from '../images/logo_n.jpg';

export default function FortniteApp() {

    const [ players, setPlayer ] = useState([]);

    useEffect(()=>{
      const playersTmp = localStorage.getItem('players');
      console.log();
      setPlayer(playersTmp.split(','));
      console.log(players);

      setInterval(()=>{
        console.log("mi intervalo");
      }, 2000);
           
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
