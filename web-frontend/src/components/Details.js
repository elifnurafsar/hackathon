import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Details = (props) => {

  //make props an array
  props = Object.values(props.props);
  console.log(props);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
      <Card style={{display: "flex"}}>
        <Container style={{textAlign:"center", display: "flex"}}>
            {/*make an array of product from receipt props*/}
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
                </Card.Body>
            </Card>
            ))}
        </Container>
        <Button style={{ width: '50%', height: '30%', marginLeft: '25%', marginRight: '25%', justifyContent: 'center', alignItems: 'center'}} onClick={routeChange}>Back</Button>
    </Card>
  );
};
export default Details;
