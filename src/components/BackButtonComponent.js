import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const BackButtonComponent = () => {
  return (
    <div>
      <Row>
        <Col>
          <Link to="/">
            <Button color="primary" style={{justifyContent:'space-between', width:'10%'}}>
              <span>
                <FontAwesomeIcon icon={faChevronCircleLeft} style={{marginRight:'10%'}} />
              </span>
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default BackButtonComponent;
