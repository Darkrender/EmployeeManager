import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import EmployeeList from '../components/Employees/EmployeeList/EmployeeList';
import EmployeeForm from '../components/Employees/EmployeeForm/EmployeeForm';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className="container-fluid">
                <div className="home-content">
                    <div className="home-row">
                        <div className="home-row-item">
                            <EmployeeList />
                        </div>
                        <div className="home-row-item">
                            <EmployeeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
