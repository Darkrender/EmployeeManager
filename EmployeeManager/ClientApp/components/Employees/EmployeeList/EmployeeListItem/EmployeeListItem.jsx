import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class EmployeeListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { employee, isSelected, handleClick } = this.props;

        return (
            <li onClick={e => handleClick(employee)} className={'employee-list-item list-group-item' + (isSelected ? ' selected' : '')}>

                <span className="content">
                    <span>
                        <i className="fa fa-user"></i>
                        <span className="employee-name">{employee.name}</span>
                        <span className="job-title"> {employee.jobTitle}</span>
                    </span>

                    <i className="fa fa-pencil-alt"></i>
                </span>
            </li>
        );
    }
}
