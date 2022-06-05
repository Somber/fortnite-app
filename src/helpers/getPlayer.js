export const getPlayer = async (player)=>{
   
    const url = 'https://fortnite-api.com/v2/stats/br/v2?name='+player;  

    const resp = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '3abe294f-918e-45d8-86de-1525f37b3acc'
      }
    });

    const {data} = await resp.json();


    const playerObj = {
        name: data.account.name,
        level: data.battlePass.level,
        overall: data.stats.all.overall,
    };
    
    return playerObj;

  }