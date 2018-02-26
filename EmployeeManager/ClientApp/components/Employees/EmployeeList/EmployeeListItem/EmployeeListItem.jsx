import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class EmployeeListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { employee, isSelected } = this.props;

        return (
            <li>{employee.name} - {employee.jobTitle}</li>
        );
    }
}
