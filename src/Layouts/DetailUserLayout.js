import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import BackButtonComponent from "../components/BackButtonComponent";
import { getUserDetail } from "../services/usersServices";
import DetailUserComponent from "../components/DetailUserComponent";

class DetailUserLayout extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  render() {
    console.log();
    return (
      <div>
        <Container>
          <BackButtonComponent />
          <br />
          <h1>Detail User</h1>
          <br />
          <DetailUserComponent />
        </Container>
      </div>
    );
  }
}

export default connect()(DetailUserLayout);
