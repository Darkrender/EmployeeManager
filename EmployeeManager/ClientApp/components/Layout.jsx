import React, { Component } from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <NavMenu />
                <div>{ this.props.children }</div>
            </div>
        );
    }
}
