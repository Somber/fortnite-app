import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import deathImg from '../images/deaths.png';
import killImg from '../images/kills.png';
import winImg from '../images/wins.png';
import matchImg from '../images/matches.png';
import ReactTooltip from 'react-tooltip';

export default function ScoreOverall({overall}) {
  return (
    <>
      <Container className='card_score'>
        <Row>
          <Col>
            <Row>
              <Col>
                <img data-tip="Partidas jugadas" className='score_img' src={matchImg} alt="Partidas jugadas"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <span data-tip="Partidas jugadas" className='score_text '>{overall ? overall.matches : 0}</span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <img data-tip="Partidas ganadas" className='score_img' src={winImg} alt="Partidas ganadas"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <span data-tip="Partidas ganadas" className='score_text'>{overall ? overall.wins : 0}</span>          
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <img data-tip="Bajas realizadas" className='score_img' src={killImg} alt="Bajas realizadas"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <span data-tip="Bajas realizadas" className='score_text'>{overall ? overall.kills : 0}</span> 
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <img data-tip="Muertes" className='score_img' src={deathImg} alt="Muertes"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <span data-tip="Muertes" className='score_text'>{overall ? overall.deaths : 0}</span> 
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ReactTooltip />
    </>
  )
}
