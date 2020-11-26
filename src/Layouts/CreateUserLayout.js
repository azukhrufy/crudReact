import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackButtonComponent from '../components/BackButtonComponent'

export default class CreateUserLayout extends Component {
    render() {
        return (
            <div>
                <Container>
                    <BackButtonComponent />
                    <br />
                    
                </Container>
            </div>
        )
    }
}
