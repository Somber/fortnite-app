import React from 'react'
import ScoreOverall from './ScoreOverall';
import { Card } from 'react-bootstrap';

export default function Overall({playerState}) {
  return (
      <>
        <ScoreOverall 
          overall = {playerState.overall ? playerState.overall: null}
        />
        <Card.Title>K/D {playerState.overall ? playerState.overall.kd : ''}</Card.Title>
      </>
    
  )
}
