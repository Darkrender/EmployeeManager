import React, { Component } from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import { actionCreators } from '../../../store/reducers/EmployeeForm';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(event) {
        this.props.beginUpdateForm({
            [event.target.name]: event.target.value
        });
    }

    _handleSubmit(event) {
        event.preventDefault();

        this.props.selectedEmployee ? this.props.updateSelectedEmployee() : this.props.createEmployee();
    }

    _displaySubmitBtn() {
        console.log('Selected Employee: ' + this.props.selectedEmployee);
        if (this.props.selectedEmployee) {
            return (
                <a href="#" className="update-employee-btn">
                    <i className="fa fa-plus"></i> <span> Update Employee</span>
                </a>
            );
        }

        return (
            <a href="#" className="create-employee-btn">
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
                        <input name="hireDate" placeholder="Enter a hire date..." value={hireDate} onChange={this._handleChange} />
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
    console.log(state);
    const { id, wage, payFrequency, jobTitle, hireDate, name, isSalaried } = state.employeeForm;
    const { selectedEmployee } = state.employees;
    return { id, wage, payFrequency, jobTitle, hireDate, name, isSalaried, selectedEmployee };
}

export default connect(mapStateToProps, actionCreators)(EmployeeForm);