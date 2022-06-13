import React from 'react'
import Score from './Score';

export default function Partial({player}) {
  return (
      <>
        <Score 
          player = {player ? player: null}
        />
      </>
  )
}
