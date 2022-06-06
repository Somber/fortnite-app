import React from 'react'
import {Card} from 'react-bootstrap';
// import deathImg from '../images/deaths.jpg';
// import killImg from '../images/kills.jpg';

export default function Score({overall}) {
  console.log(overall);
  return (
    <>
      <Card.Text className='card_score'>
        <Card.Text>
        <span className='score_text'>Matches {overall ? overall.matches : 0}</span>
        </Card.Text>  
        <Card.Text>
        <span className='score_text'>Wins {overall ? overall.wins : 0}</span>
        </Card.Text>  
        <Card.Text>
          {/* <img className='score_img' src={killImg} alt="Las veces que ha matado"></img> <span className='score_text'>{kills}</span>        */}
          <span className='score_text'>Kills {overall ? overall.kills : 0}</span> 
        </Card.Text>  
        <Card.Text>
          {/* <img className='score_img' src={deathImg} alt="Las veces que ha muerto"></img> <span className='score_text'>{deaths}</span>        */}          
          <span className='score_text'>Deaths {overall ? overall.deaths : 0}</span> 
        </Card.Text>  
      </Card.Text>
    </>
  )
}
