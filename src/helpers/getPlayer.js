export const getPlayer = async (player)=>{
   
    const url = `https://fortnite-api.com/v2/stats/br/v2?name=${player}&timeWindow=season`;  

    const resp = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '3abe294f-918e-45d8-86de-1525f37b3acc'
      }
    });

    const {data} = await resp.json();
    let overall = null;

    if (data && data.stats.all.overall){
      overall = data.stats.all.overall;

      let kills = 0;
      let deaths = 0;

      kills = kills + (data.stats.all.solo ? data.stats.all.solo.kills : 0);
      kills = kills + (data.stats.all.duo ? data.stats.all.duo.kills : 0);
      kills = kills + (data.stats.all.squad ? data.stats.all.squad.kills : 0);

      deaths = deaths + (data.stats.all.solo ? data.stats.all.solo.deaths : 0);
      deaths = deaths + (data.stats.all.duo ? data.stats.all.duo.deaths : 0);
      deaths = deaths + (data.stats.all.squad ? data.stats.all.squad.deaths : 0);

      overall.kd = (kills / deaths).toFixed(3);
      
    } 

    const playerObj = {
        name: player,
        level: data ? data.battlePass.level : 0,
        overall: overall,
        solo: data ? data.stats.all.solo : null,
        duo: data ? data.stats.all.duo : null,
        squad: data ? data.stats.all.squad : null,
        ltm: data ? data.stats.all.ltm : null,
        update: Date.now()
    };

    return playerObj;

  }