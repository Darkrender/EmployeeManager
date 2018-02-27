import { Reducer } from 'redux';
import { startFetchingEmployees, selectEmployee, clearSelectedEmployee } from '../actions/EmployeesActions';
import { updateForm } from '../actions/EmployeeFormActions';

export const EmployeesState = {
    isFetching: false,
    selectedEmployee: null,
    allEmployees: []
}

export const actionCreators = {
    clearSelectedEmployee: () => clearSelectedEmployee,
    fetchEmployees: () => startFetchingEmployees,
    setSelectedEmployee: (employee) => (dispatch) => {
        dispatch(updateForm(employee));
        dispatch(selectEmployee(employee));
    }
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCHING_EMPLOYEES':
            return { ...state, isFetching: true };
        case 'GET_RECEIVED_EMPLOYEES_SUCCESS':
            return { ...state, isFetching: false, allEmployees: action.payload };
        case 'SET_SELECTED_EMPLOYEE':
            return { ...state, selectedEmployee: action.payload };
        case 'UPDATE_EMPLOYEE_SUCCESS':
            const employees = state.allEmployees.filter(e => e.id !== state.selectedEmployee.id)
            return { ...state, allEmployees: [action.payload, ...employees], selectedEmployee: action.payload };
        case 'CLEAR_SELECTED_EMPLOYEE':
            return { ...state, selectedEmployee: null };
        case 'ADD_EMPLOYEE_TO_STATE':
            return { ...state, allEmployees: [action.payload, ...state.allEmployees] };
        default:
            return state || { isFetching: false, allEmployees: [], selectedEmployee: null };
    }
};
