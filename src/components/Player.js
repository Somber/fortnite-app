import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { getPlayer } from '../helpers/getPlayer';


export default function Player({player}) {

    const [playerState, setPlayerState] = useState({
      name: "",
      level: 0,
      overall: null,
    })

    useEffect(()=>{
      getPlayer(player).then(p => setPlayerState(p));
    }, [])     

  return (
      <>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>{player}</Card.Header>
          <Card.Body>
            <Card.Title>K/D {playerState.overall ? playerState.overall.kd : ''}</Card.Title>
            <Card.Text>
            <Row>
              <Col>Ultima partida {playerState.overall ? playerState.overall.lastModified : ''}<br/></Col>              
            </Row>
            <Row>
                <Col>Has matado a {playerState.overall ? playerState.overall.kills : 0} enemigos.<br/></Col>
                <Col>Has muerto {playerState.overall ? playerState.overall.deaths : 0} veces.</Col>
                </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    
  )
}
