import { updateForm } from '../actions/EmployeeFormActions';
import { beginCreateEmployee, beginUpdateEmployee } from '../actions/EmployeesActions';


export const EmployeeFormState = {
    id: null,
    name: '',
    jobTitle: '',
    wage: '',
    payFrequency: 0,
    hireDate: new Date(),
    isSalaried: true
}

export const actionCreators = {
    beginUpdateForm: (payload) => updateForm(payload),
    createEmployee: () => beginCreateEmployee,
    updateSelectedEmployee: () => beginUpdateEmployee
}

export const reducer = (state = EmployeeFormState, action) => {
    switch (action.type) {
        case 'UPDATE_FORM':
            return { ...state, ...action.payload };
        case 'CLEAR_FORM':
            return { ...EmployeeFormState };
        default:
            return state;
    }
};
