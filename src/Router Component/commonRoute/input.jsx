import React, { Component } from 'react';
const Input = (props) => {
    const { name, label, error, ...rest } = props 
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="form-control"/>
            {/* <input
                value={value}
                onChange={onChange}
                type={type}
                name={name}
                id={name}
                className="form-control col" /> */}
                {error && <div className="alert p-1 alert-danger">{ error }</div>}
        </div>
    );
}

export default Input;