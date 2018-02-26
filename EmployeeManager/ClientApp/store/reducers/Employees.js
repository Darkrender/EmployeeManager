import { Reducer } from 'redux';
import { startFetchingEmployees } from '../actions/EmployeesActions';

export const EmployeesState = {
    isFetching: false,
    selectedEmployee: null,
    allEmployees: []
}

export const actionCreators = {
    fetchEmployees: () => startFetchingEmployees
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCHING_EMPLOYEES':
            return { ...state, isFetching: true };
        case 'GET_RECEIVED_EMPLOYEES_SUCCESS':
            return { ...state, isFetching: false, allEmployees: action.payload };
        default:
            return state || { isFetching: false, allEmployees: [], selectedEmployee: null };
    }
};
