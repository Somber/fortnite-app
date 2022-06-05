import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
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
              Ultima partida {playerState.overall ? playerState.overall.lastModified : ''}<br/>
              Has matado a {playerState.overall ? playerState.overall.kills : 0} enemigos.<br/>
              Has muerto {playerState.overall ? playerState.overall.deaths : 0} veces.
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    
  )
}
