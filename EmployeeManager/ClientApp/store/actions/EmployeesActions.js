import axios from 'axios';

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
        response => dispatch(addEmployeeToState(response.data)),
        error => console.error(error)
    );
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