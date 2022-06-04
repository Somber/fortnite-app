import React, { useState, useEffect } from 'react'

export default function Player({player}) {

    const [playerState, setPlayerState] = useState({
      name: "",
      level: 0,
      overall: null,
    })

    useEffect(()=>{
      getPlayer();
    }, [])     



    const getPlayer = async ()=>{
      const url = 'https://fortnite-api.com/v2/stats/br/v2?name='+player;  

      const resp = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '3abe294f-918e-45d8-86de-1525f37b3acc'
        }
      });

      const {data} = await resp.json();
      console.log(data.stats.all.overall);

    
      setPlayerState({
        name: data.account.name,
        level: data.battlePass.level,
        overall: data.stats.all.overall,
      });

      console.log(playerState);

    

    }
  
  return (
      <>

        <h3>{player} Nivel {playerState.level ? playerState.level : 0}</h3>
        <p>Ultima partida {playerState.overall ? playerState.overall.lastModified : ''}</p>
        <p>K/D {playerState.overall ? playerState.overall.kd : ''}</p>
        <p>
            Has matado a {playerState.overall ? playerState.overall.kills : 0} enemigos.  
            Has muerto {playerState.overall ? playerState.overall.deaths : 0} veces.
        </p>

      </>
    
  )
}
