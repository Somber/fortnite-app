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

    if (data){
      overall = data.stats.all.overall;

      const solo = data.stats.all.solo ? data.stats.all.solo.kd : 0;
      const duo = data.stats.all.duo ? data.stats.all.duo.kd : 0;
      const squad = data.stats.all.squad ? data.stats.all.squad.kd : 0;

      let cont = 0;
      if (data.stats.all.solo){
        cont++;
      }
      if (data.stats.all.duo){
        cont++;
      }
      if (data.stats.all.squad){
        cont++;
      }

      if (cont>0){
        overall.kd = ((solo+duo+squad) / cont).toFixed(3);
        // console.log(new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 3 }).format(overall.kd));

      }
      
    } 

    const playerObj = {
        name: player,
        level: data ? data.battlePass.level : 0,
        overall: overall,
        solo: data ? data.stats.all.solo : null,
        duo: data ? data.stats.all.duo : null,
        squad: data ? data.stats.all.squad : null,
        update: Date.now()
    };

    return playerObj;

  }