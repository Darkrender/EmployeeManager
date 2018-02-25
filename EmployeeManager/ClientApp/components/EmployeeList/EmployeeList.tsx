import * as React from 'react';
import { connect, Dispatch, Store } from 'react-redux';
import { ApplicationState } from 'ClientApp/store';
import EmployeeListItem from './EmployeeListItem/EmployeeListItem';
import * as EmployeeState from '../../store/Employees';

type EmployeeListProps =
    EmployeeState.EmployeesState &
    typeof EmployeeState.actionCreators &
    { dispatch: Dispatch<any> };

class EmployeeList extends React.Component<EmployeeListProps, {}> {
    constructor(props: any) {
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
            <div>
                Employee List
                <ul>
                    {allEmployees.map(employee => <EmployeeListItem key={employee.id} employee={employee}/>) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => {
    const { allEmployees, isFetching, selectedEmployee } = state.employees
    return { allEmployees, isFetching, selectedEmployee };
}

export default connect(mapStateToProps, EmployeeState.actionCreators)(EmployeeList);