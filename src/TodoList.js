import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const TodoList = (props) => {
  return (
    <ListGroup>
      {props.list.map((listItem, index) => {
        return (
          <ListGroupItem key={index}>
            {listItem}
            <Button color="danger" onClick={() => props.handleDelete(index)}>
              Delete!
            </Button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default TodoList;
