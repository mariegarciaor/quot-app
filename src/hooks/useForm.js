import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({ email:"", password:"" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(setErrors(validate(values)) && setIsSubmitting(true)) {
            return (
                <Link to="/QuoteStart" />
            )
        }
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;