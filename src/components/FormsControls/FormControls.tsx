import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './FormControls.module.css';

type TextAreaPropsType = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    props: any
    meta: {
        touched: boolean;
        error: string;
    };
    input?: any

};
type InputPropsType = InputHTMLAttributes<HTMLInputElement> & {
    meta: {
        touched: boolean;
        error: string;
    };
    input?: any
    props: any
};

type FormControlPropsType = {
    meta: {
        touched: boolean;
        error: string;
    };
    input?: any
    children: React.ReactNode;
    props: any
};

export const FormControl: React.FC<FormControlPropsType> = ({ meta, input, children, ...restProps }) => {
    const showError = meta.touched && meta.error;

    return (
        <div className={`${styles.formControl} ${showError ? styles.error : ''}`}>
            <div>{children}</div>
            {showError && <span>{meta.error}</span>}
        </div>
    );
};

export const TextArea: React.FC<TextAreaPropsType> = ({ meta, input, ...restProps }) => {
    return <FormControl meta={meta} props={{...restProps}}><textarea {...input} {...restProps} /></FormControl>;
};

export const Input: React.FC<InputPropsType> = ({ meta, input, ...restProps }) => {
    const showError = meta.touched && meta.error;

    return (
     <FormControl meta={meta} props={{...restProps}}><input {...input} {...restProps} /></FormControl>

);
};