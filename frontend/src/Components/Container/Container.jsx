import {Component} from 'react';
import { Container } from '@material-ui/core';
import './css/container.css';

class ContainerEmpresas extends Component {
    render() {
        return (
            <Container maxWidth="xl">
                {this.props.children}
            </Container>
        );
    }
}

export default ContainerEmpresas;