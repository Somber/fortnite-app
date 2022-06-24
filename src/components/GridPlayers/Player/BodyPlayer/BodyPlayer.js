import React from 'react'
import Overall from './Overall';
import Partial from './Partial';
import { Container, Row, Col } from 'react-bootstrap';

export const BodyPlayer = ({
    player, 
    sizeCards}) => {

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Overall player={player}/>
        </Col>
        <Col xs={12}>
          <Row className={(sizeCards == "Maxis" ? 'hidden' : '')  +' row_score row_score_bck_solo'}>
            <Col xs={3}>
              <span className='label_type'>Solo</span>
            </Col>
            <Col>
              <Partial player={player.solo}/>
            </Col>
          </Row>
          <Row className={(sizeCards == "Maxis" ? 'hidden' : '')+' row_score row_score_bck_duo'}>
            <Col xs={3}>
              <span className='label_type'>Duo</span>
            </Col>
            <Col>
              <Partial player={player.duo}/>
            </Col>
          </Row>
          <Row className={(sizeCards == "Maxis" ? 'hidden' : '') +' row_score row_score_bck_squad'}>
            <Col xs={3}>
              <span className='label_type'>Squad</span>
            </Col>
            <Col>
              <Partial player={player.squad}/>
            </Col>
          </Row>
          <Row className={(sizeCards == "Maxis" ? 'hidden' : '') +' row_score row_score_bck_ltm'}>
            <Col xs={3}>
              <span className='label_type'>LTM</span>
            </Col>
            <Col>
              <Partial player={player.ltm}/>
            </Col>
          </Row>
        </Col>
      </Row>        
    </Container>
  )
}
