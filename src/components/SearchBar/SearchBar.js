import React from 'react';
import { Form, Input, Button } from 'reactstrap'
import classes from './SearchBar.module.css'
const searchBar = (props) => {
  return (
    <Form inline className={classes.Form}>
      <Input 
      type="text" 
      value={props.value} 
      onChange={props.changed}
      placeholder="Search movies..."
      />
      {/* <Button onClick={props.click}>Search</Button> */}
    </Form>
  );
};

export default searchBar;