import React from 'react'

import AddPlayer from './components/AddPlayer';
import { GridPlayers } from './components/GridPlayers/GridPlayers';

import useStatePlayer from './hooks/useStatePlayer';

export default function FortniteApp() {

  const [ players, setPlayers ] = useStatePlayer();
    
  return (
    <>
        <h2 className='title_app'>Fortnite Comparador<br/><span className='subtitle_app'>by MarcGalarga</span></h2>
        <hr/>
        <AddPlayer setPlayers = {setPlayers}/>
        <GridPlayers players={players} setPlayers={setPlayers} />
    </>
  )
}
