import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import removePlayer from '../../../helpers/removePlayer';
import { timeConvert } from '../../../helpers/timeConvert';

export const HeaderPlayer = ({player, setPlayers}) => {

  const handleClick = (e)=>{
    removePlayer(player, setPlayers);
  };

  return (
    <Container>
      <Row className='row_player_main align-items-center'>
        <Col>
          <span>{player.name}</span>
        </Col>
        <Col className='col_player_level'>
            <span>Nivel {player.level ? player.level : 0}</span>
        </Col>
        <Col xs={1}>
          <button className='card_close' type='button' onClick={handleClick}>x</button>
        </Col>                  
      </Row>
      <Row>
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
