import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import receipts from "../receipts";


const Details = (props) => {

  //make props an array
  props = Object.values(props.props);
  console.log(props);
  const id  = localStorage.getItem('id'); 

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
      <Card style={{display: "flex"}}>
        <Container style={{textAlign:"center", display: "center", marginLeft: "25%"}}>
            <Card style={{height:"50%", width: "50%", margin: "5%"}}>
                <Card.Body style={{textAlign:"center", display: "center"}}>
                    <Card.Title>{receipts[id].title}</Card.Title>
                    <strong>Products:</strong>
                    <ol>
                    {receipts[id].products.map((product) => (
                        <Card.Text>
                            <li>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>-------</td>
                                    <td>{product.price}</td>
                                    <td>TL</td>
                                </tr>
                            </li> 
                        </Card.Text>
                    ))}
                    </ol>
                    <Card.Text>
                        <strong>Date:</strong> {receipts[id].date}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        <Button style={{ width: '50%', height: '30%', marginLeft: '25%', marginRight: '25%', justifyContent: 'center', alignItems: 'center'}} onClick={routeChange}>Back</Button>
    </Card>
  );
};
export default Details;
