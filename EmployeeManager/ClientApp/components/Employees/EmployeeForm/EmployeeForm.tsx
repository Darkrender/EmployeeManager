import * as React from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import { ApplicationState } from 'ClientApp/store';
import * as EmployeeState from '../../../store/Employees';
import { Employee } from 'ClientApp/shared/interfaces/Employee';

type EmployeeListProps = {
    selectedEmployee: Employee
};

class EmployeeList extends React.Component<EmployeeListProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { selectedEmployee } = this.props;

        return (
            <div>
                Employee Form

                <div>{selectedEmployee ? selectedEmployee : "No one selected"}</div>
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => {
    const { selectedEmployee } = state.employees
    return { selectedEmployee };
}

export default connect(mapStateToProps, EmployeeState.actionCreators)(EmployeeList);