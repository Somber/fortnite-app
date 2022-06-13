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
  
          localStorage.setItem('playersV2', JSON.stringify(newPlayers));
          return newPlayers;
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
