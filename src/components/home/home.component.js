import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

export default function Home() {
  return (
    <Grid fluid className="mt-5">
      <Row center="xs">
        <Col>
          <h1>React Forms</h1>
        </Col>
      </Row>
      <Row center="xs">
        <Col>
          <h4 className="text-primary">A project about forms with react</h4>
        </Col>
      </Row>
      <Row center="xs" className="mt-5">
        <Col>
          <h5 className="text-black-75">List of forms</h5>
        </Col>
      </Row>
      <Row center="xs" className="mt-3">
        <Col className="m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="p-0">Login</Card.Title>
              <Card.Text>
                <u>Objective</u>: <i>Let registered users enter the site.</i><br/><br/>
                Allow <b>registered users</b> to enter your site by typing their
                credentials, usually email and password
              </Card.Text>
              <LinkContainer to="/login">
                <Button variant="primary" size="sm">
                  Watch
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="p-0">Registration</Card.Title>
              <Card.Text>
                <u>Objective</u>: <i>Register new users.</i><br/><br/>
                This form is used to register <b>new users</b>. When peolple
                come to your site you can register them with this type of form.
              </Card.Text>
              <LinkContainer to="/registration">
                <Button variant="primary" size="sm">
                  Watch
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>New seller</Card.Title>
              <Card.Text>
                <u>Objective</u>: <i>Register new sellers.</i><br/><br/>
                Form to register a new seller.
              </Card.Text>
              <LinkContainer to="/new-seller">
                <Button variant="primary" size="sm">
                  Watch
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>New delivery</Card.Title>
              <Card.Text>
                <u>Objective</u>: <i>Register new deliveries.</i><br/><br/>
                Form to register a new delivery.
              </Card.Text>
              <LinkContainer to="/new-delivery">
                <Button variant="primary" size="sm">
                  Watch
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Grid>
  );
}
