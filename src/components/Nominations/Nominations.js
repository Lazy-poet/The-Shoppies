import React, {useState} from 'react';
import {Button, Badge,  Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import NominationList from './NominationList/NominationList';
import classes from './Nominations.module.css'
const Nominations = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let list = null;
  if(props.list.length === 0) list = <p>Your nomination list is currently empty. Please search and select movies to nominate</p>
  else list = props.list.map(item=>{
    return(
      <NominationList removeMovie={props.removeMovie} list={props.list} id={item.imdbID} title={item.Title} year={item.Year} />
    )
  })
  return (
    <div className={classes.Nomination}>
    <Button onClick={toggle}>
      Nominations <Badge color='danger'>{props.list.length}</Badge>
    </Button>
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Your Nominations</ModalHeader>
        <ModalBody>
          <p>You have {5 - props.list.length} {props.list.length > 3 ? 'nomination' : 'nominations'} left</p>
          <Table hover responsive striped size="sm">
         {list}
         </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>

  );
};

export default Nominations;