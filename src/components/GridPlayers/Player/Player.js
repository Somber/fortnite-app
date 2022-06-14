import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { BodyPlayer } from './BodyPlayer/BodyPlayer';
import { HeaderPlayer } from './HeaderPlayer';
import Moment from 'react-moment';

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
            <Card.Footer>
              <Row>
                <Col>
                  Last Update: <Moment format="D MMM YYYY HH:mm:ss">{player.update}</Moment>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
      </>
    
    )
}
