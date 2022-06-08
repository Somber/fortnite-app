import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import deathImg from '../images/deaths.png';
import killImg from '../images/kills.png';
import winImg from '../images/wins.png';
import matchImg from '../images/matches.png';

export default function ScoreOverall({overall}) {
  return (
    <>
      <Container className='card_score'>
        <Row>
          <Col>
            <Row>
              <Col>
                <img className='score_img' src={matchImg} alt="Partidas jugadas"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className='score_text '>{overall ? overall.matches : 0}</span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <img className='score_img' src={winImg} alt="Partidas ganadas"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className='score_text'>{overall ? overall.wins : 0}</span>          
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <img className='score_img' src={killImg} alt="Bajas realizadas"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className='score_text'>{overall ? overall.kills : 0}</span> 
              </Col>
            </Row>
            
          </Col>
          <Col>
            <img className='score_img' src={deathImg} alt="Muertes"></img>
            <span className='score_text'>{overall ? overall.deaths : 0}</span> <br/>
          </Col>
        </Row>
      </Container>
    </>
  )
}
