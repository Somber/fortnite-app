import React from 'react'
import { Card } from 'react-bootstrap';
import { BodyPlayer } from './BodyPlayer/BodyPlayer';
import { HeaderPlayer } from './HeaderPlayer';


export default function Player({player, setPlayers}) {

    return (
      <>
          <Card border="primary">
            <Card.Header className='card_header'>
              <HeaderPlayer player = {player} setPlayers={setPlayers} />
            </Card.Header>
            <Card.Body>
              <BodyPlayer player = {player}/>
            </Card.Body>
          </Card>
      </>
    
    )
}
