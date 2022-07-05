import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AddPlayer from './components/AddPlayer';
import { GridPlayers } from './components/GridPlayers/GridPlayers';
// import { OrderPlayers } from './components/OrderPlayers';
import useStatePlayer from './hooks/useStatePlayer';

export default function FortniteApp() {

  const [ players, setPlayers, sizeCards, setSizeCards ] = useStatePlayer();
    
  const handleSizeCards = (e) => {
    e.preventDefault();
    const newValue = e.target.innerText === 'Minis' ? 'Maxis' : 'Minis';
    setSizeCards(newValue);
    localStorage.setItem('sizeCards', newValue);
  }

  return (
    <>
        <h2 className='title_app'>Fortnite Comparador<br/><span className='subtitle_app'>by MarcGalarga</span></h2>
        <hr/>
        <Container fluid>
          <Row>
            <Col md={12} lg={'auto'}>
              <AddPlayer setPlayers = {setPlayers}/>
            </Col> 
            <Col md={12} lg={'auto'}>
              <button id="buttonSizeCards" className='btn btn-primary' onClick={handleSizeCards}>{sizeCards}</button>
            </Col>   
            {/* <Col>
              <OrderPlayers />
            </Col>     */}
          </Row>
          <Row >
            <Col xd={12}>
              <GridPlayers players={players} setPlayers={setPlayers} sizeCards={sizeCards} />
            </Col>
          </Row>
        </Container>
    </>
  )
}
