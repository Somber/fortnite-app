import React from 'react'
import {Card} from 'react-bootstrap';
import deathImg from '../images/deaths.jpg';
import killImg from '../images/kills.jpg';

export default function Score({kills, deaths}) {
  return (
    <>
      <Card.Text className='card_score'>
        <Card.Text>
          <img className='score_img' src={killImg} alt="Las veces que ha matado"></img> <span className='score_text'>{kills}</span>       
        </Card.Text>  
        <Card.Text>
          <img className='score_img' src={deathImg} alt="Las veces que ha muerto"></img> <span className='score_text'>{deaths}</span>       
        </Card.Text>  
      </Card.Text>
    </>
  )
}