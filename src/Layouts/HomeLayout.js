import React, { Component } from 'react';
import { connect } from "react-redux";
import UsersTableComponent from "../components/UsersTableComponent";
import { usersServices } from '../services/usersServices';

class HomeLayout extends Component {
    componentDidMount() {
        this.props.dispatch(usersServices());
    }
    render() {
        return (
            <div>
                 <UsersTableComponent/>
            </div>
        )
    }
}


export default connect()(HomeLayout)