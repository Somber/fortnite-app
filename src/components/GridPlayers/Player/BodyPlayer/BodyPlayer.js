import React from 'react'
import Overall from './Overall';
import Partial from './Partial';
import { Container, Row, Col } from 'react-bootstrap';

export const BodyPlayer = ({player}) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Overall player={player}/>
        </Col>
        <Col xs={12}>
          <Row className='row_score row_score_bck_solo'>
            <Col>
              <span className='label_type'>Solo</span> <Partial player={player.solo}/>
            </Col>
          </Row>
          <Row className='row_score row_score_bck_duo'>
            <Col>
            <span className='label_type'>Duo</span> <Partial player={player.duo}/>
            </Col>
          </Row>
          <Row className='row_score row_score_bck_squad'>
            <Col>
            <span className='label_type'>Squad</span> <Partial player={player.squad}/>
            </Col>
          </Row>
          <Row className='row_score row_score_bck_ltm'>
            <Col>
            <span className='label_type'>LTM</span> <Partial player={player.ltm}/>
            </Col>
          </Row>
        </Col>
      </Row>        
    </Container>
  )
}
