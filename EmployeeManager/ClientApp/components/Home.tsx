import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import EmployeeList from '../components/EmployeeList/EmployeeList';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <EmployeeList />
        );
    }
}
