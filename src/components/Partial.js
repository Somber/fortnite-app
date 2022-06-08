import React from 'react'
import Score from './Score';
import { Card } from 'react-bootstrap';

export default function Partial({playerState}) {
  return (
      <>
        <Score 
          partial = {playerState ? playerState: null}
        />
      </>
  )
}
