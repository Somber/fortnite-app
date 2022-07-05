import { getPlayer } from '../helpers/getPlayer';

export const addPlayer = (inputValue, setPlayers) => {

    const playersTmp = localStorage.getItem('playersV2');
    const playersL = JSON.parse(playersTmp);

    if (playersL.find(p=>p.name === inputValue)){
      return;
    }

    getPlayer(inputValue)
    .then(p => {
      
        if (p.overall){

          const playersTmp = localStorage.getItem('playersV2');
          let players;

          if (!playersTmp){
              players = [p];
          } else {
              players = [p, ...JSON.parse(playersTmp)];
          }

          const copyListItems = [...players];

          if (players.length > 1){

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
          }

          const kdPlayer = copyListItems[0]
          const kdPlayerPlata = copyListItems.length > 1 ? copyListItems[1] : false; 
          const kdPlayerBronce = copyListItems.length > 2 ? copyListItems[2] : false; 

          const t = players.map((pus)=>{
            pus.kd = kdPlayer.name === pus.name;
            pus.kdPlata = kdPlayerPlata.name === pus.name;
            pus.kdBronce = kdPlayerBronce.name === pus.name;
            return pus;
          });

          localStorage.setItem('playersV2', JSON.stringify(t));
          setPlayers(players);

        }


    });

}
