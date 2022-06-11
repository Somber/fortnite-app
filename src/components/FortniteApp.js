import React, { useEffect, useState } from 'react'
import AddPlayer from './AddPlayer';
import { GridPlayers } from './GridPlayers/GridPlayers';


export default function FortniteApp() {

    const [ players, setPlayer ] = useState([]);

    useEffect(()=>{
      const playersTmp = localStorage.getItem('players');
      if (playersTmp) setPlayer(playersTmp.split(','));
      setInterval(()=>{
        const playersTmp = localStorage.getItem('players');
        if (playersTmp) setPlayer(playersTmp.split(','));
      }, 60000);
    }, []);
    
    return (
    <>
        <h2 className='title_app'>Fortnite Comparador<br/><span className='subtitle_app'>by MarcGalarga</span></h2>
        <hr/>
        <AddPlayer setPlayer={setPlayer}/>
        <GridPlayers players={players} setPlayer={setPlayer}/>
    </>

  )
}
