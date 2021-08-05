import { useState } from 'react';
export const useForm = (initalState = '') => {
    const [state, setState] = useState(initalState);
    const reset = () => {
        setState(initalState);
    };
    const handleInputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value,
        });
    };
    return [state, handleInputChange, reset];
};
