import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { BodyPlayer } from './BodyPlayer/BodyPlayer';
import { HeaderPlayer } from './HeaderPlayer';
import Moment from 'react-moment';

export default function Player({player, players, setPlayers, drag, setDrag}) {

  const dragStart = (e) => {
    if (e.target.id.substring(0,3) === 'id_'){
      setDrag({
        dragItem:e.target.id, 
        dragOverItem:null
      });
    }
  };

  const dragEnter = (e) => {

    if (e.target.id.substring(0,3) === 'id_' &&  drag.dragItem !== e.target.id){
      setDrag({
        dragItem:drag.dragItem, 
        dragOverItem:e.target.id
      });
    }
  };

  const drop = (e) => {

    if (drag.dragItem && drag.dragOverItem && drag.dragItem !== drag.dragOverItem){

      const copyListItems = [...players];
      const dragPlayerPosition = copyListItems.findIndex(i => i.name === drag.dragItem.substring(3));
      const dragOverPlayerPosition = copyListItems.findIndex(i => i.name === drag.dragOverItem.substring(3));
  
      const dragItemContent = copyListItems[dragPlayerPosition];
      copyListItems.splice(dragPlayerPosition, 1);
      copyListItems.splice(dragOverPlayerPosition, 0, dragItemContent);

      setDrag({
        dragItem:null, 
        dragOverItem:null
      });

      setPlayers(copyListItems);

    }

  };




  return (
    <>
        <Card 
            id={'id_'+player.name}
            onDragStart={(e) => dragStart(e)} 
            onDragEnter={(e) => dragEnter(e)}
            onDragEnd={drop}
            className={(player.kd ? 'winter' : (player.kdPlata ? 'silver' : (player.kdBronce ? 'bronce' : '')))}
            draggable 
            border="primary">
          <Card.Header className='card_header'>
            <HeaderPlayer player = {player} setPlayers={setPlayers} />
          </Card.Header>
          <Card.Body>
            <BodyPlayer player = {player}/>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>
                Última actualización: <Moment format="D MMM YYYY HH:mm:ss">{player.update}</Moment>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
    </>
  
  )
}
