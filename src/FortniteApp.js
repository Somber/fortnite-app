import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AddPlayer from './components/AddPlayer';
import { GridPlayers } from './components/GridPlayers/GridPlayers';
import { OrderPlayers } from './components/OrderPlayers';
import useStatePlayer from './hooks/useStatePlayer';

export default function FortniteApp() {

  const [ players, setPlayers ] = useStatePlayer();
    
  return (
    <>
        <h2 className='title_app'>Fortnite Comparador<br/><span className='subtitle_app'>by MarcGalarga</span></h2>
        <hr/>
        <Container fluid>
          <Row>
            <Col>
              <AddPlayer setPlayers = {setPlayers}/>
            </Col>    
            <Col>
              <OrderPlayers />
            </Col>    
          </Row>
          <Row >
            <Col xd={12}>
              <GridPlayers players={players} setPlayers={setPlayers} />
            </Col>
          </Row>
        </Container>
    </>
  )
}
