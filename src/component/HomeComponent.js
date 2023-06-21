// import { render } from "@testing-library/react";
import { Component } from "react";
// import { redirect } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Card className="container header">
        <CardImg top width="100%" src="assets/img/R000001-1.jpg" alt="" />
        <CardBody>
          <CardTitle>Room</CardTitle>
          <CardSubtitle>1.500.000</CardSubtitle>
          <CardText>Resort Room</CardText>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
    );
  }
}

export default Home;
