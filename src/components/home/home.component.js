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
              <Card.Title className="mb-1">Login</Card.Title>
              <p>
                <i>(Let registered users enter the site)</i>
              </p>
              <Card.Text>
                Allow <b>registered users</b> to enter your site by typing their
                credentials, usually email and password.
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
              <Card.Title className="mb-1">Registration</Card.Title>
              <p>
                <i>(Register new users)</i>
              </p>
              <Card.Text>
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
              <Card.Title className="mb-1">New seller</Card.Title>
              <p>
                <i>(Register new sellers)</i>
              </p>
              <Card.Text>Form to register a new seller.</Card.Text>
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
              <Card.Title className="mb-1">New delivery</Card.Title>
              <p>
                <i>(Register new deliveries)</i>
              </p>
              <Card.Text>Form to register a new delivery.</Card.Text>
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
