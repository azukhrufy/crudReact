import React, { Component } from 'react';
import { connect } from "react-redux";
import UsersTableComponent from "../components/UsersTableComponent";
import { deleteUserDetail, getUsersList } from '../services/usersServices';

class HomeLayout extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersList());
        this.props.dispatch(deleteUserDetail());
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