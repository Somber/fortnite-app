import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { getPlayer } from '../helpers/getPlayer';
import { HeaderPlayer } from './HeaderPlayer';
import Overall from './Overall';
import Partial from './Partial';

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
              <Row>
                <Col xs={4}>
                  <Overall playerState={playerState}/>
                </Col>
                <Col xs={8}>
                  <Row>
                    <Col>
                      Solo <Partial playerState={playerState.solo}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Due <Partial playerState={playerState.duo}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Squad <Partial playerState={playerState.squad}/>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>

          </Card>
      </>
    
    )
}
