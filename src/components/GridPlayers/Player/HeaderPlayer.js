import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import { timeConvert } from '../../../helpers/timeConvert';

export const HeaderPlayer = ({player, setPlayers}) => {

    const handleClick = (e)=>{
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
            const kdPlayer = copyListItems[0]
  
            const t = newPlayers.map((pus)=>{
              pus.kd = kdPlayer.name === pus.name;
              return pus;
            });

            resultPlayers = t;
          } else {
            resultPlayers = newPlayers;
          }

          localStorage.setItem('playersV2', JSON.stringify(resultPlayers));
          return resultPlayers;
        });  
      };

  return (
    <Container>
      <Row className='row_player_main'>
        <Col>
          <span>{player.name} - Nivel {player.level ? player.level : 0}</span>
        </Col>
        <Col xs={1}>
          <button className='card_close' type='button' onClick={handleClick}>x</button>
        </Col>                  
      </Row>
      <Row className='row_player_detail'>
        <Col xs={7}>
          <span>Última Partida</span><br/>{player.overall ? <Moment format="D MMM YYYY HH:mm:ss">{player.overall.lastModified}</Moment> : ''} 
        </Col>
        <Col xs={5}>
          <span>Tiempo Jugado</span><br/>{player.overall ? timeConvert(player.overall.minutesPlayed) : ''}
        </Col>
      </Row>
    </Container>
  )
}
