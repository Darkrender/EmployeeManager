import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import EmployeeList from '../components/Employees/EmployeeList/EmployeeList';
import EmployeeForm from '../components/Employees/EmployeeForm/EmployeeForm';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="home-content">
                    <div className="home-row">
                        <div className="home-row-item">
                            <EmployeeList />
                        </div>
                        <div className="home-row-item">
                            <EmployeeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
