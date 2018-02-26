import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends Component {
    render() {
        return (
            <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                    <div className='navbar-header'>
                        <Link className='navbar-brand' to={ '/' }>EmployeeManager</Link>
                    </div>
                </div>
            </div>
        );
    }
}
