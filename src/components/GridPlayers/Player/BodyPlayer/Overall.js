import React from 'react'
import ScoreOverall from './ScoreOverall';
import { Card } from 'react-bootstrap';
import kdImg from '../../../../images/kd.png';
import ReactTooltip from 'react-tooltip';

export default function Overall({player}) {
  return (
      <>
        <ScoreOverall player = {player.overall ? player.overall: null} />
        <Card.Title data-tip="Proporción entre bajas realizadas y muertes">
          <img className='img-kd' src={kdImg} alt="k/d"></img>
          <span>{player.overall ? player.overall.kd : ''}</span>
        </Card.Title>
        <ReactTooltip backgroundColor='rgb(78, 103, 194)'/>
      </>
    
  )
}
