import React, { Component } from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import EmployeeListItem from './EmployeeListItem/EmployeeListItem';
import * as EmployeeState from '../../../store/reducers/Employees';

class EmployeeList extends Component{
    constructor(props) {
        super(props);

        this._setSelectedEmployee = this._setSelectedEmployee.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchEmployees();
    }

    _handleClick(event) {
        event.preventDefault();
        this.props.clearSelectedEmployee();
    }
    
    render() {
        const { allEmployees, isFetching, selectedEmployee } = this.props;

        return (
            <div className="employee-list-container card">
                <div className="employee-list-header card-header"></div>

                <div className="employee-list-body card-body">
                    {
                        isFetching ? <div className="loader"><i className="fa fa-spinner fa-spin"></i></div> : 
                            <ul className="employee-list list-group list-group-flush">
                                {
                                    allEmployees.map(employee =>
                                        <EmployeeListItem
                                            handleClick={this._setSelectedEmployee}
                                            key={employee.id}
                                            employee={employee}
                                            isSelected={selectedEmployee && employee.id === selectedEmployee.id} />
                                    )
                                }
                            </ul>
                    }
                </div>

                <div className="employee-list-footer card-footer">
                    <a href="#" onClick={this._handleClick} className="add-employee-btn">
                        <i className="fa fa-plus"></i> <span>Add Employee</span>
                    </a>
                </div>
            </div>
        );
    }

    _setSelectedEmployee(employee) {
        this.props.setSelectedEmployee(employee);
    }
}

const mapStateToProps = (state) => {
    const { allEmployees, isFetching, selectedEmployee } = state.employees
    return { allEmployees, isFetching, selectedEmployee };
}

export default connect(mapStateToProps, EmployeeState.actionCreators)(EmployeeList);