import { Reducer } from 'redux';
import { startFetchingEmployees, selectEmployee } from '../actions/EmployeesActions';

export const EmployeesState = {
    isFetching: false,
    selectedEmployee: null,
    allEmployees: []
}

export const actionCreators = {
    fetchEmployees: () => startFetchingEmployees,
    setSelectedEmployee: (employee) => selectEmployee(employee)
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCHING_EMPLOYEES':
            return { ...state, isFetching: true };
        case 'GET_RECEIVED_EMPLOYEES_SUCCESS':
            return { ...state, isFetching: false, allEmployees: action.payload };
        case 'SET_SELECTED_EMPLOYEE':
            return { ...state, selectedEmployee: action.payload };
        default:
            return state || { isFetching: false, allEmployees: [], selectedEmployee: null };
    }
};
