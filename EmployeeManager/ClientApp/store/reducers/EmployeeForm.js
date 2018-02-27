import { updateForm } from '../actions/EmployeeFormActions';
import { beginCreateEmployee } from '../actions/EmployeesActions';


export const EmployeeFormState = {
    id: null,
    name: '',
    jobTitle: '',
    wage: '',
    payFrequency: '',
    hireDate: new Date(),
    isSalaried: true
}

export const actionCreators = {
    beginUpdateForm: (payload) => updateForm(payload),
    createEmployee: () => beginCreateEmployee,
    updateSelectedEmployee: () => { }
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
