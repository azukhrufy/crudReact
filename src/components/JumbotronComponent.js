import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";


const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}!</h1>
          <p className="lead">
           This is a react js project website crud with redux
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">
              Learn More
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
