import React from 'react';
import { Button } from 'reactstrap';
import classes from "./NominationList.module.css"

const nominationList = (props) =>(
    <tbody className={classes.NominationList}>
    <tr className={classes.Row}>
          <th scope="row">-</th>
          <td>{props.title}</td>
          <td>{props.year}</td>
          <td><Button color="danger" onClick={()=>props.removeMovie(props.id)}>Remove</Button></td>
        </tr>
    </tbody>

  )

export default nominationList;