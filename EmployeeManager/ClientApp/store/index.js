import * as Employees from './Employees';

// The top-level state object
export const ApplicationState = {
    employees: Employees.EmployeesState
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    employees: Employees.reducer
};