import axios from 'axios';

export const updateForm = (payload) => {
    return { type: 'UPDATE_FORM', payload };
}
