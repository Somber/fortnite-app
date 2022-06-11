import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import { timeConvert } from '../helpers/timeConvert';

export const HeaderPlayer = ({player, playerState, setPlayer}) => {

    const handleClick = (e)=>{
        setPlayer(players=> {
          const newPlayers = players.filter((p)=>{
            return p !== player;
          });
  
          localStorage.setItem('players', newPlayers)
          return newPlayers;
        });  
      };

  return (
    <Container>
    <Row className='row_player_main'>
      <Col>
        <span>{player} - Nivel {playerState.level ? playerState.level : 0}</span>
      </Col>
      <Col xs={1}>
        <button className='card_close' type='button' onClick={handleClick}>x</button>
      </Col>                  
    </Row>
    <Row className='row_player_detail'>
      <Col xs={7}>
        <span>Última Partida</span><br/>{playerState.overall ? <Moment format="D MMM YYYY HH:mm:ss">{playerState.overall.lastModified}</Moment> : ''} 
      </Col>
      <Col xs={5}>
        <span>Tiempo Jugado</span><br/>{playerState.overall ? timeConvert(playerState.overall.minutesPlayed) : ''}
      </Col>
    </Row>
  </Container>
  )
}
