import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends Component {
    render() {
        return (
            <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                    <div className='navbar-header'>
                        <div className='navbar-brand'>EmployeeManager</div>
                    </div>
                </div>
            </div>
        );
    }
}
