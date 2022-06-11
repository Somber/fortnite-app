import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import deathImg from '../../../../images/deaths.png';
import killImg from '../../../../images/kills.png';
import winImg from '../../../../images/wins.png';
import matchImg from '../../../../images/matches.png';
import ReactTooltip from 'react-tooltip';

export default function Score({partial}) {
  return (
    <>
      <Container className='card_score card_score_partial'>
      <Row>
          <Col>
            <Row>
              <Col>
                <img data-tip="Partidas jugadas" className='score_img' src={matchImg} alt="Partidas jugadas"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <span data-tip="Partidas jugadas" className='score_text '>{partial ? partial.matches : 0}</span>
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
                <span data-tip="Partidas ganadas" className='score_text'>{partial ? partial.wins : 0}</span>          
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
                <span data-tip="Bajas realizadas" className='score_text'>{partial ? partial.kills : 0}</span> 
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
                <span data-tip="Muertes" className='score_text'>{partial ? partial.deaths : 0}</span> 
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>K/D: {partial ? partial.kd : 0}</span> 
          </Col>
        </Row>
      </Container>
      <ReactTooltip />
    </>
  )
}
