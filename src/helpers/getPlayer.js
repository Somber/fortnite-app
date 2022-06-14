export const getPlayer = async (player)=>{
   
    const url = `https://fortnite-api.com/v2/stats/br/v2?name=${player}&timeWindow=season`;  

    const resp = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '3abe294f-918e-45d8-86de-1525f37b3acc'
      }
    });

    const {data} = await resp.json();
   
    const playerObj = {
        name: player,
        level: data ? data.battlePass.level : 0,
        overall: data ? data.stats.all.overall : null,
        solo: data ? data.stats.all.solo : null,
        duo: data ? data.stats.all.duo : null,
        squad: data ? data.stats.all.squad : null,
        update: Date.now()
    };

    return playerObj;

  }