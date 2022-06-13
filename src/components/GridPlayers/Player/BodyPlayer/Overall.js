import React from 'react'
import ScoreOverall from './ScoreOverall';
import { Card } from 'react-bootstrap';

export default function Overall({player}) {
  return (
      <>
        <ScoreOverall 
          player = {player.overall ? player.overall: null}
        />
        <Card.Title>K/D {player.overall ? player.overall.kd : ''}</Card.Title>
      </>
    
  )
}
