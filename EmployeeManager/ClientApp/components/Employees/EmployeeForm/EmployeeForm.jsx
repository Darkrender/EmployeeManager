import React, { Component } from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import * as EmployeeState from '../../../store/reducers/Employees';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { selectedEmployee } = this.props;

        return (
            <div className="employee-form-container card">
                <div className="employee-form-header card-header"></div>

                <div className="card-body">
                    <form className="employee-form">
                        <input placeholder="Enter a name..." value={selectedEmployee ? selectedEmployee.name : ''}/>
                        <input placeholder="Enter a job title..." value={selectedEmployee ? selectedEmployee.jobTitle : ''}/>
                        <input placeholder="Enter a wage..." value={selectedEmployee ? selectedEmployee.wage : ''}/>
                        <input placeholder="Select a pay frequency..." value={selectedEmployee ? selectedEmployee.payFrequency : ''}/>
                        <input placeholder="Enter a hire date..." value={selectedEmployee ? selectedEmployee.hireDate : ''}/>
                    </form>
                </div>

                <div className="employee-form-footer card-footer">
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { selectedEmployee } = state.employees
    return { selectedEmployee };
}

export default connect(mapStateToProps, EmployeeState.actionCreators)(EmployeeForm);