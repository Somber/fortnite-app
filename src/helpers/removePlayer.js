
const removePlayer = (player, setPlayers) => {

  setPlayers(players=> {
    const newPlayers = players.filter((p)=>{
      return p.name !== player.name;
    });

    let resultPlayers;

    if (newPlayers && newPlayers.length > 0) {
      const copyListItems = [...newPlayers];
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

      const t = newPlayers.map((pus)=>{
        pus.kd = kdPlayer.name === pus.name;
        pus.kdPlata = kdPlayerPlata.name === pus.name;
        pus.kdBronce = kdPlayerBronce.name === pus.name;          
        return pus;
      });

      resultPlayers = t;
    } else {
      resultPlayers = newPlayers;
    }

    localStorage.setItem('playersV2', JSON.stringify(resultPlayers));
    return resultPlayers;
  }); 

}

export default removePlayer