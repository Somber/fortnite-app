import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
// import deathImg from '../images/deaths.jpg';
// import killImg from '../images/kills.jpg';

export default function Score({partial}) {
  return (
    <>
      <Container className='card_score card_score_partial'>
        <Row>
          <Col>
            <span className='score_text_partial'>Matches: {partial ? partial.matches : 0}</span>
          </Col>
          <Col>
            <span className='score_text_partial'>Wins: {partial ? partial.wins : 0}</span>          
          </Col>
          <Col>
            {/* <img className='score_img' src={killImg} alt="Las veces que ha matado"></img> <span className='score_text'>{kills}</span>        */}
            <span className='score_text_partial'>Kills: {partial ? partial.kills : 0}</span> 
          </Col>
          <Col>
            {/* <img className='score_img' src={deathImg} alt="Las veces que ha muerto"></img> <span className='score_text'>{deaths}</span>        */}          
            <span className='score_text_partial'>Deaths: {partial ? partial.deaths : 0}</span> 
          </Col>
          <Col>
            <span className='score_text_partial'>K/D: {partial ? partial.kd : 0}</span> 
          </Col>
        </Row>
      </Container>
    </>
  )
}
