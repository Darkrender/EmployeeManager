import { ThunkAction } from "redux-thunk";
import { Dispatch } from "react-redux";
import { ApplicationState, AppThunkAction } from "ClientApp/store";
import { Employee } from "ClientApp/shared/interfaces/Employee";
import axios, { AxiosPromise } from 'axios';

export const startFetchingEmployees = (dispatch: Dispatch<ApplicationState>) => {
    dispatch({ type: 'FETCHING_EMPLOYEES' });

    return getAllEmployees().then(
        response => {
            const employees: Employee[] = response.data.result;
            dispatch(getReceivedEmployeesSuccess(employees))
        },
        error => console.log(error)
    );
}

export const getReceivedEmployeesSuccess = (payload: Employee[]) => {
    return { type: 'GET_RECEIVED_EMPLOYEES_SUCCESS', payload };
}

export const getAllEmployees = () => {
    return axios.get('/api/employees');
}