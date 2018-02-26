import axios from 'axios';

export const startFetchingEmployees = (dispatch) => {
    dispatch({ type: 'FETCHING_EMPLOYEES' });

    return getAllEmployees().then(
        response => {
            const employees = response.data.result;
            dispatch(getReceivedEmployeesSuccess(employees))
        },
        error => console.log(error)
    );
}

export const beginCreateEmployee = (employee) => {
    return (dispatch) => {
        createEmployee(employee).then(
            response => dispatch(addEmployeeToState(response.data.result)),
            error => console.error(error)
        );
    }
}

export const beginUpdateEmployee = (dispatch) => {

}

export const selectEmployee = (payload) => {
    return { type: 'SET_SELECTED_EMPLOYEE', payload };
}

export const getReceivedEmployeesSuccess = (payload) => {
    return { type: 'GET_RECEIVED_EMPLOYEES_SUCCESS', payload };
}

export const getAllEmployees = () => {
    return axios.get('/api/employees');
}

export const addEmployeeToState = (payload) => {
    return { type: 'ADD_EMPLOYEE_TO_STATE', payload };
}

export const createEmployee = (employeeData) => {
    return axios.post('/api/employees', employeeData);
}