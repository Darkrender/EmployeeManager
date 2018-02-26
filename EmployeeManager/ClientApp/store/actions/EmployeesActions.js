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

export const selectEmployee = (payload) => {
    return { type: 'SET_SELECTED_EMPLOYEE', payload };
}

export const getReceivedEmployeesSuccess = (payload) => {
    return { type: 'GET_RECEIVED_EMPLOYEES_SUCCESS', payload };
}

export const getAllEmployees = () => {
    return axios.get('/api/employees');
}