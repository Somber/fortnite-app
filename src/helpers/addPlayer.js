import { getPlayer } from '../helpers/getPlayer';

export const addPlayer = (inputValue, setPlayers) => {

    getPlayer(inputValue)
    .then(p => {
        const playersTmp = localStorage.getItem('playersV2');
        let players;

        if (!playersTmp){
            players = [p];
        } else {
            players = [p, ...JSON.parse(playersTmp)];
        }

        const copyListItems = [...players];
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
        const kdPlayer = copyListItems[0]

        const t = players.map((pus)=>{
          pus.kd = kdPlayer.name === pus.name;
          return pus;
        });

        localStorage.setItem('playersV2', JSON.stringify(t));
        setPlayers(players);
    });

}