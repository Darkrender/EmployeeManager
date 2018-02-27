import axios from 'axios';

import { clearForm } from './EmployeeFormActions';

export const startFetchingEmployees = (dispatch) => {
    dispatch({ type: 'FETCHING_EMPLOYEES' });

    return getAllEmployees().then(
        response => {
            const employees = response.data.result;
            employees.forEach(item => item.hireDate = new Date(item.hireDate));
            dispatch(getReceivedEmployeesSuccess(employees))
        },
        error => console.log(error)
    );
}

export const beginCreateEmployee = (dispatch, getState) => {
    const newEmployee = getState().employeeForm;

    return createEmployee(newEmployee).then(
        response => {
            dispatch(addEmployeeSuccess(response.data));
            dispatch(clearForm());
        },
        error => console.error(error)
    );
}

export const beginUpdateEmployee = (dispatch, getState) => {
    const employee = getState().employeeForm;

    return updateEmployee(employee).then(
        response => {
            console.log(response.data);
            dispatch(updateEmployeeSuccess(response.data))
        },
        error => console.error(`Error: ${error}`)
    );
}

export const selectEmployee = (payload) => {
    return { type: 'SET_SELECTED_EMPLOYEE', payload };
}

export const getReceivedEmployeesSuccess = (payload) => {
    return { type: 'GET_RECEIVED_EMPLOYEES_SUCCESS', payload };
}

export const addEmployeeSuccess = (payload) => {
    return { type: 'ADD_EMPLOYEE_TO_STATE', payload };
}

export const updateEmployeeSuccess = (payload) => {
    return { type: 'UPDATE_EMPLOYEE_SUCCESS', payload };
}

export const getAllEmployees = () => {
    return axios.get('/api/employees');
}

export const createEmployee = (employeeData) => {
    return axios.post('/api/employees', employeeData);
}

export const updateEmployee = (employeeData) => {
    return axios.put(`/api/employees/${employeeData.id}`, employeeData);
}