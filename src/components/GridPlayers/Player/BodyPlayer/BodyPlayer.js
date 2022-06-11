import React from 'react'
import Overall from './Overall';
import Partial from './Partial';
import { Container, Row, Col } from 'react-bootstrap';

export const BodyPlayer = ({playerState}) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Overall playerState={playerState}/>
        </Col>
        <Col xs={12}>
          <Row className='row_score row_score_bck_solo'>
            <Col>
              <span className='label_type'>Solo</span> <Partial playerState={playerState.solo}/>
            </Col>
          </Row>
          <Row className='row_score row_score_bck_duo'>
            <Col>
            <span className='label_type'>Duo</span> <Partial playerState={playerState.duo}/>
            </Col>
          </Row>
          <Row className='row_score row_score_bck_squad'>
            <Col>
            <span className='label_type'>Squad</span> <Partial playerState={playerState.squad}/>
            </Col>
          </Row>
        </Col>
      </Row>        
    </Container>
  )
}
