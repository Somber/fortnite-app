import React, { useEffect, useState } from 'react'
import { getPlayer } from '../helpers/getPlayer';
import AddPlayer from './AddPlayer';
import { GridPlayers } from './GridPlayers/GridPlayers';


export default function FortniteApp() {

    const [ players, setPlayers ] = useState([]);

    function delay(delay) {
      return new Promise(function(resolve) {
          setTimeout(resolve, delay);
      });
    }

    useEffect(()=>{
      const playersStg = localStorage.getItem('playersV2');

      if (playersStg){
        setPlayers(JSON.parse(playersStg));
      }

      setInterval(()=>{
        const playersStg = localStorage.getItem('playersV2');

        if (playersStg){
          const playersJson = JSON.parse(playersStg);

          playersJson.map((p)=>{
            delay(10000);
              getPlayer(p.name)
              .then(p2 => {
                if (p2.overall){
                  setPlayers((playersUseState)=>{
                    const t = playersUseState.map((pus)=>{
                      return pus.name !== p2.name ? pus : p2;
                    });
                    localStorage.setItem('playersV2', JSON.stringify(t));
                    return t;
                  });
                }
              })              
              return p;
          });
        }
  
      }, 30000);
    }, []);
    
    return (
    <>
        <h2 className='title_app'>Fortnite Comparador<br/><span className='subtitle_app'>by MarcGalarga</span></h2>
        <hr/>
        <AddPlayer setPlayers = {setPlayers}/>
        <GridPlayers players={players} setPlayers={setPlayers} />
    </>

  )
}
