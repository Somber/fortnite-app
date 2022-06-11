import React from 'react'
import Overall from './Overall';
import Partial from './Partial';
import { Container, Row, Col } from 'react-bootstrap';

export const BodyPlayer = ({playerState}) => {
  return (
    <Container>
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
    </Container>
  )
}
