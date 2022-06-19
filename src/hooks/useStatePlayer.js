import { useEffect, useState } from 'react'
import { getPlayer } from '../helpers/getPlayer';

const useStatePlayer = () => {

  const [ players, setPlayers ] = useState([]);

  useEffect(()=>{
    const playersStg = localStorage.getItem('playersV2');

    if (playersStg){
      setPlayers(JSON.parse(playersStg));
    }

    setInterval(()=>{
      const playersStg = localStorage.getItem('playersV2');

      if (playersStg){
        const playersJson = JSON.parse(playersStg);
        playersJson.sort((a,b)=>{
          if (a.update > b.update) {
            return 1;
          }
          if (a.update < b.update) {
            return -1;
          }
          return 0;
        });
        const currentPlayer = playersJson[0];

        if (currentPlayer){
          getPlayer(currentPlayer.name)
          .then(p => {
            if (p.overall){

              setPlayers((playersUseState)=>{
                
                const copyListItems = [...playersUseState];

                // TIENE QUE ORDERNAR POR LA SUMA DE LOS KDs PARCIALES Y NO POR EL TOTAL. 
                copyListItems.sort((a,b)=>{
                  if (a.overall.kd > b.overall.kd) {
                    return 1;
                  }
                  if (a.overall.kd < b.overall.kd) {
                    return -1;
                  }
                  return 0;
                });
                copyListItems.reverse();
                const kdPlayer = copyListItems[0];
                const kdPlayerPlata = copyListItems.length > 1 ? copyListItems[1] : false; 
                const kdPlayerBronce = copyListItems.length > 2 ? copyListItems[2] : false; 

                const t = playersUseState.map((pus)=>{
                  const result = pus.name !== p.name ? pus : p;
                  result.kd = kdPlayer.name === pus.name;
                  result.kdPlata = kdPlayerPlata.name === pus.name;
                  result.kdBronce = kdPlayerBronce.name === pus.name;                  
                  return result;
                });

                localStorage.setItem('playersV2', JSON.stringify(t));
                return t;
              });
            }
          })              
            
        }

      }
      
    }, 15000);
    
  }, []);


  return ([
    players,
    setPlayers
  ])
}

export default useStatePlayer