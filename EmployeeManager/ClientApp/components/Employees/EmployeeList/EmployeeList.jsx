import React, { Component } from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import EmployeeListItem from './EmployeeListItem/EmployeeListItem';
import * as EmployeeState from '../../../store/Employees';

class EmployeeList extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchEmployees();
    }

    render() {
        const { allEmployees, isFetching, selectedEmployee } = this.props;

        if (isFetching) {
            return <div>loading</div>
        }

        return (
            <div className="employee-list-container panel">
                <div className="employee-list-header panel-heading"></div>
                <div className="panel-body">
                    <ul className="employee-list">
                        {allEmployees.map(employee => <EmployeeListItem key={employee.id} employee={employee}/>) }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { allEmployees, isFetching, selectedEmployee } = state.employees
    return { allEmployees, isFetching, selectedEmployee };
}

export default connect(mapStateToProps, EmployeeState.actionCreators)(EmployeeList);