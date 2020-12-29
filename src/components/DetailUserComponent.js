import React from "react";
import { connect } from "react-redux";
import { Card, Col, Container, Row, Spinner } from "reactstrap";

//menghubungkan table component dengan reducers/user.js
// dikoneksikan melalui home layout yang "connect" dengan reducers/user.js
const mapStateToProps = (state) => {
  return {
    UserDetail: state.users.UserDetail,
    UsersListError: state.users.UsersListError,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Container>
      <div style={{ margin: "6%" }}>
        {props.UserDetail ? (
          <Card>
            <Container style={{ padding: "8%" }}>
              <Row>
                <Col lg={6}>Nama </Col>
                <Col lg={6}>: {props.UserDetail.name}</Col>
              </Row>
              <br />
              <Row>
                <Col lg={6}>Umur </Col>
                <Col lg={6}>: {props.UserDetail.age}</Col>
              </Row>
              <br />
              <Row>
                <Col lg={6}>Alamat </Col>
                <Col lg={6}>: {props.UserDetail.address}</Col>
              </Row>
              <br />
              <Row>
                <Col lg={6}>Phone Number </Col>
                <Col lg={6}>: {props.UserDetail.phone}</Col>
              </Row>
            </Container>
          </Card>
        ) : (
          <div className="text-center">
            {props.UsersListError ? (
              <h4>{props.UsersListError}</h4>
            ) : (
              <Spinner color="dark" />
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
