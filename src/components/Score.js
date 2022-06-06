import React from 'react'
import {Card} from 'react-bootstrap';

export default function Score({kills, deaths}) {
  return (
    <>
      <Card.Text className='card_score'>
        <Card.Text>
          <img className='score_img' src={require('../images/kills.jpg')} alt="Las veces que ha matado"></img> <span className='score_text'>{kills}</span>       
        </Card.Text>  
        <Card.Text>
          <img className='score_img' src={require('../images/deaths.jpg')}></img> <span className='score_text'>{deaths}</span>       
        </Card.Text>  
      </Card.Text>
    </>
  )
}
