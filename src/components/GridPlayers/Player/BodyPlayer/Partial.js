import React from 'react'
import Score from './Score';

export default function Partial({playerState}) {
  return (
      <>
        <Score 
          partial = {playerState ? playerState: null}
        />
      </>
  )
}
