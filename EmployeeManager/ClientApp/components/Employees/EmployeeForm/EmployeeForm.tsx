import * as React from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import { ApplicationState } from 'ClientApp/store';
import * as EmployeeState from '../../../store/Employees';
import { Employee } from 'ClientApp/shared/interfaces/Employee';
//import { Card } from 'material-ui/Card';

type EmployeeFormProps =
    typeof EmployeeState.actionCreators &
    { selectedEmployee: Employee };

class EmployeeForm extends React.Component<EmployeeFormProps, {}> {
    constructor(props: any) {
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

const mapStateToProps = (state: ApplicationState) => {
    const { selectedEmployee } = state.employees
    return { selectedEmployee };
}

export default connect(mapStateToProps, EmployeeState.actionCreators)(EmployeeForm);