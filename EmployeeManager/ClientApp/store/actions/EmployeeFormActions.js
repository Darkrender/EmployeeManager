import axios from 'axios';

export const updateForm = (payload) => {
    return { type: 'UPDATE_FORM', payload };
}

export const clearForm = () => {
    return { type: 'CLEAR_FORM' };
}
