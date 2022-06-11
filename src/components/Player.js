import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { getPlayer } from '../helpers/getPlayer';
import { BodyPlayer } from './BodyPlayer';
import { HeaderPlayer } from './HeaderPlayer';


export default function Player({player, setPlayer}) {

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
            <Card.Header className='card_header'>
              <HeaderPlayer player = {player} playerState = {playerState} setPlayer = {setPlayer} />
            </Card.Header>
            <Card.Body>
              <BodyPlayer playerState = {playerState}/>
            </Card.Body>
          </Card>
      </>
    
    )
}
