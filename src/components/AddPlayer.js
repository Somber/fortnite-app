import React , { useState }from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { addPlayer } from '../helpers/addPlayer';


const AddPlayer = ({setPlayers}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 0){
          addPlayer(inputValue, setPlayers);
        }
        setinputValue("");
    }

  return (
    <Container fluid>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <input 
                id='inputSearch'
                type="text"
                placeholder='Introduce jugador a buscar'
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button type="submit" id="buttonSearch">Buscar</Button>
          </Col>
        </Row>
      </form>
    </Container>
  )
}

export default AddPlayer;