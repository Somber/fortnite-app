import React, { useState, useEffect } from 'react'
import { Col, Card} from 'react-bootstrap';
import { getPlayer } from '../helpers/getPlayer';
import { timeConvert } from '../helpers/timeConvert';
import Moment from 'react-moment';

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
          <Card border="primary">
            <Card.Header>{player} - Nivel {playerState.level ? playerState.level : 0}</Card.Header>
            <Card.Body>
              <Card.Title>K/D {playerState.overall ? playerState.overall.kd : ''}</Card.Title>
              <Card.Text>
                Tiempo jugado {playerState.overall ? timeConvert(playerState.overall.minutesPlayed) : ''}<br/>
                Ultima partida {playerState.overall ? <Moment format="D \d\e MMM \d\e\l YYYY HH:mm:ss">{playerState.overall.lastModified}</Moment> : ''}<br/>
                Ha matado {playerState.overall ? playerState.overall.kills : 0} enemigos.<br/>
                Ha muerto {playerState.overall ? playerState.overall.deaths : 0} veces.
              </Card.Text>
            </Card.Body>
          </Card>
      </>
    
  )
}
