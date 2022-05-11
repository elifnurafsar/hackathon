import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ReceiptList = (props) => {

  //make props an array
  props = Object.values(props.props);
  console.log(props);


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/details`; 
    navigate(path);
  }


  return (
    <Container style={{textAlign:"center", display: "flex"}}>
        {/*make an array of cards from props*/}
        {props.map((receipt) => (
          <Card key={receipt.id} style={{height:"250px", width: "300px", margin: "5%"}}>
            <Card.Img variant="top" height={"100px"} src={receipt.url} />
            <Card.Body>
              <Card.Title>{receipt.title}</Card.Title>
              <Card.Text>
                <strong>Category:</strong> {receipt.category}
              </Card.Text>
              <Card.Text>
              <strong>Date:</strong> {receipt.date}
              </Card.Text>
              <Button onClick={routeChange}>More Info</Button>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
};
export default ReceiptList;
