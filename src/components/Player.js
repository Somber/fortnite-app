import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { getPlayer } from '../helpers/getPlayer';
import { timeConvert } from '../helpers/timeConvert';
import Moment from 'react-moment';
import Overall from './Overall';


export default function Player({player, setPlayer}) {

    const [playerState, setPlayerState] = useState({
      name: "",
      level: 0,
      overall: null,
    })

    useEffect(()=>{
      getPlayer(player).then(p => setPlayerState(p));
    }, [])     

  
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
      <>
          <Card border="primary">
            <Card.Header className='card_header'>
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
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Overall playerState={playerState}/>
                </Col>
                <Col>
                
                </Col>
              </Row>
              
            </Card.Body>

          </Card>
      </>
    
    )
}
