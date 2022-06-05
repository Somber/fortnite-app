import React, { useState } from 'react'
import AddPlayer from './AddPlayer';
import Player from './Player';
import { Container, Row, Col } from 'react-bootstrap';


export default function FortniteApp() {

    const [ players, setPlayer ] = useState([]);

    return (
    <>
        <h2>FortniteApp</h2>
        <hr/>
        <AddPlayer setPlayer={setPlayer}/>

        <Container>
          <Row>
                {
                  players.map(player=>(
                    <Col><Player key={player} player={player}/></Col>
                  ))
                }
          </Row>
        </Container>

        <ol>
        </ol>
    </>

  )
}
