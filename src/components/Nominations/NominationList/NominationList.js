import React from 'react';
import { Button } from 'reactstrap';
import classes from "./NominationList.module.css"

const nominationList = (props) =>(
  <div className={classes.NominationList}>
  <li>{props.title} {props.year} <Button>Remove</Button></li>
  </div>
  )

export default nominationList;