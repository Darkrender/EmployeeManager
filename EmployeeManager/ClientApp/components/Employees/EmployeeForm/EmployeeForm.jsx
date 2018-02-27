﻿import React, { Component } from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import { actionCreators } from '../../../store/reducers/EmployeeForm';
import { Calendar } from 'primereact/components/calendar/Calendar';
import moment from 'moment';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleDateChange = this._handleDateChange.bind(this);
    }

    _handleChange(event) {
        let value = event.target.value;
        this.props.beginUpdateForm({
            [event.target.name]: value
        });
    }

    _handleDateChange(event) {
        const value = moment(event.value).format('MM-DD-YYYY');
        console.log(value);
        this.props.beginUpdateForm({
            hireDate: value
        });
    }

    _handleSubmit(event) {
        event.preventDefault();

        this.props.selectedEmployee ? this.props.updateSelectedEmployee() : this.props.createEmployee();
    }

    _displaySubmitBtn() {
        if (this.props.selectedEmployee) {
            return (
                <a href="#" onClick={this._handleSubmit} className="update-employee-btn">
                    <i className="fa fa-plus"></i> <span> Update Employee</span>
                </a>
            );
        }

        return (
            <a href="#" onClick={this._handleSubmit} className="create-employee-btn">
                <i className="fa fa-plus"></i> <span> Create Employee</span>
            </a>
        );
    }

    render() {
        const { id, wage, payFrequency, jobTitle, hireDate, name, isSalaried } = this.props;

        return (
            <div className="employee-form-container card">
                <div className="employee-form-header card-header"></div>

                <div className="card-body">
                    <form className="employee-form" onSubmit={this._handleSubmit}>
                        <input name="name" placeholder="Enter a name..." value={name} onChange={this._handleChange} />
                        <input name="jobTitle" placeholder="Enter a job title..." value={jobTitle} onChange={this._handleChange} />
                        <input name="wage" placeholder="Enter a wage..." value={wage} onChange={this._handleChange} />
                        <input name="payFrequency" placeholder="Select a pay frequency..." value={payFrequency} onChange={this._handleChange} />

                        <Calendar value={new Date(hireDate)} onChange={this._handleDateChange}></Calendar>
                    </form>

                </div>

                <div className="employee-form-footer card-footer">
                    {this._displaySubmitBtn()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { wage, payFrequency, jobTitle, hireDate, name, isSalaried } = state.employeeForm;
    const { selectedEmployee } = state.employees;
    return { wage, payFrequency, jobTitle, hireDate, name, isSalaried, selectedEmployee };
}

export default connect(mapStateToProps, actionCreators)(EmployeeForm);