import { Reducer } from 'redux';
import { Employee } from 'ClientApp/shared/interfaces/Employee';
import { startFetchingEmployees, getReceivedEmployeesSuccess } from './actions/EmployeesActions';
import { AppThunkAction } from 'ClientApp/store';

export interface EmployeesState {
    isFetching: boolean;
    selectedEmployee: Employee;
    allEmployees: Employee[];
}

interface FetchingEmployeesAction { type: 'FETCHING_EMPLOYEES' }
interface GetReceivedEmployeesSuccessAction { type: 'GET_RECEIVED_EMPLOYEES_SUCCESS', payload: Employee[] }

type KnownAction = FetchingEmployeesAction | GetReceivedEmployeesSuccessAction;

export const actionCreators = {
    fetchEmployees: () => startFetchingEmployees
};

export const reducer: Reducer<EmployeesState> = (state: EmployeesState, action: KnownAction) => {
    switch (action.type) {
        case 'FETCHING_EMPLOYEES':
            return { ...state, isFetching: true };
        case 'GET_RECEIVED_EMPLOYEES_SUCCESS':
            return { ...state, isFetching: false, allEmployees: action.payload };
        default:
            return state || { isFetching: false, allEmployees: [], selectedEmployee: null };
    }
};
