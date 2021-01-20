import React, {useState} from 'react';
import {Button, Badge,  Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import NominationList from './NominationList/NominationList';
import classes from './Nominations.module.css'
const Nominations = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let list = null;
  if(props.list.length === 0) list = <p>Your nomination list is currently empty. Please search and select movies to nominate</p>
  else list = props.list.map(item=>{
    return(
      <NominationList list={props.list} title={item.Title} year={item.Year} />
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
          <p>You have {5 - props.list.length} nomination(s) left</p>
         {list}
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>

  );
};

export default Nominations;