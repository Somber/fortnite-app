import React, { useState, useEffect } from 'react'
import { Card} from 'react-bootstrap';
import { getPlayer } from '../helpers/getPlayer';
import { timeConvert } from '../helpers/timeConvert';
import Moment from 'react-moment';
import deathImg from '../images/deaths.jpg';
import killImg from '../images/kills.png';
import Score from './Score';

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
            <Card.Header>
              {player} - Nivel {playerState.level ? playerState.level : 0}
              <Card.Text className='card_lastgame'>
                <Card.Text>
                <span>Ultima partida</span> {playerState.overall ? <Moment format="D \d\e MMM \d\e\l YYYY HH:mm:ss">{playerState.overall.lastModified}</Moment> : ''} 
                </Card.Text>              
                <Card.Text>
                  <span>Tiempo jugado</span> {playerState.overall ? timeConvert(playerState.overall.minutesPlayed) : ''}
                </Card.Text>              
              </Card.Text>
            </Card.Header>
            <Card.Body>
              <Score 
                kills = {playerState.overall ? playerState.overall.kills : 0}
                deaths = {playerState.overall ? playerState.overall.deaths : 0}
              />
              <Card.Title>K/D {playerState.overall ? playerState.overall.kd : ''}</Card.Title>
            </Card.Body>
          </Card>
      </>
    
  )
}
