import {Component} from 'react';
import { Container } from '@material-ui/core';
import './css/container.css';

class ContainerEmpresas extends Component {
    render() {
        return (
            <Container maxWidth={false} className={'px-0'}>
                {this.props.children}
            </Container>
        );
    }
}

export default ContainerEmpresas;