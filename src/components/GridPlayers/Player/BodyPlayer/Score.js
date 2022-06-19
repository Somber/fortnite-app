import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import deathImg from '../../../../images/deaths.png';
import killImg from '../../../../images/kills.png';
import winImg from '../../../../images/wins.png';
import matchImg from '../../../../images/matches.png';
import ReactTooltip from 'react-tooltip';

export default function Score({player}) {
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
                <span data-tip="Partidas jugadas" className='score_text '>{player ? player.matches : 0}</span>
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
                <span data-tip="Partidas ganadas" className='score_text'>{player ? player.wins : 0}</span>          
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
                <span data-tip="Bajas realizadas" className='score_text'>{player ? player.kills : 0}</span> 
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
                <span data-tip="Muertes" className='score_text'>{player ? player.deaths : 0}</span> 
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='row_partial_kd'>
          <Col>
            <span data-tip="Proporción entre bajas realizadas y muertes">K/D: {player ? player.kd : 0}</span> 
          </Col>
        </Row>
      </Container>
      <ReactTooltip backgroundColor='rgb(78, 103, 194)'/>
    </>
  )
}
