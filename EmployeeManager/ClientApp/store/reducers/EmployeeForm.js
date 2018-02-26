import { updateForm } from '../actions/EmployeeFormActions';


export const EmployeeFormState = {
    id: '',
    name: '',
    jobTitle: '',
    wage: '',
    payFrequency: '',
    hireDate: '',
    isSalaried: true
}

export const actionCreators = {
    beginUpdateForm: (payload) => updateForm(payload),
    createEmployee: () => { },
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
