import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const BackComponent = () => {
  return (
    <div>
      <Row>
        <Col>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default BackComponent;
