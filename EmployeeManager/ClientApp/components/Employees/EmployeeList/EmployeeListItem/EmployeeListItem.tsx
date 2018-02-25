import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'ClientApp/store';
import * as EmployeeState from 'ClientApp/store/Employees';
import { Employee } from 'ClientApp/shared/interfaces/Employee';

type EmployeeListItemProps = {
    employee: Employee,
    isSelected?: boolean
};

export default class EmployeeListItem extends React.Component<EmployeeListItemProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { employee, isSelected } = this.props;

        return (
            <li>{employee.name} - {employee.jobTitle}</li>
        );
    }
}
