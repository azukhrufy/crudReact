import React, { Component } from 'react';
import {UsersTableComponent} from "../components/UsersTableComponent";

export default class HomeLayout extends Component {
    render() {
        return (
            <div>
                 <UsersTableComponent users={this.props.users} />
            </div>
        )
    }
}
