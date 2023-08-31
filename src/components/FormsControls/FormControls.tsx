import React from 'react';
import styles from './FormControls.module.css'

type TextAreaPropsType = {
    input: any
    meta: any
}


export const TextArea: React.FC<TextAreaPropsType> = ({input, meta, ...restProps}) => {


    const showError = meta.touched && meta.error

    return (


        <div className={styles.formControl + " " + (showError ?  styles.error : "") }>
            <div><textarea {...input} {...restProps}/></div>
            {showError &&  <span>meta.error</span>}
        </div>
    );
};

