import React, { Component } from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import * as EmployeeState from '../../../store/reducers/Employees';
//import { Card } from 'material-ui/Card';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { selectedEmployee } = this.props;

        return (
            <div className="employee-form-container panel">
                <div className="employee-form-header panel-heading"></div>

                <div className="panel-body">{selectedEmployee ? selectedEmployee : "No one selected"}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { selectedEmployee } = state.employees
    return { selectedEmployee };
}

export default connect(mapStateToProps, EmployeeState.actionCreators)(EmployeeForm);