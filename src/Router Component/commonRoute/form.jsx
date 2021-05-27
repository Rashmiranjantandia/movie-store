import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';
class Form extends Component {
    state = {
        data: {},
        errors: {}
    };
    validate = () => {
        const options = { abortEarly: false }
        const { error } = Joi.validate(this.state.data, this.schema, options);
        // console.log(error);

        if (!error) return null;
        const errors = {};

        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;

        // const errors = {};
        // const { account } = this.state;
        // if (account.username.trim() === '')
        //     errors.username = 'Username is required.'
        // if (account.password.trim() === '')
        //     errors.password = 'Password is required.'
        // console.log(Object.keys(errors).length);
        // return Object.keys(errors).length === 0 ? null : errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;

        // if (error) return null;
        // return error.details[0].message;

        // if (name === 'username') {
        //     if (value.trim() === '') return 'Username is required.';
        // }
        // if (name === 'password') {
        //     if (value.trim() === '') return 'Password is required.';
        // }
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} })
        if (errors) return;

        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderButton(lebel) {
        return (
                <button
                    disabled={this.validate()}
                    className="btn btn-primary">
                    {lebel}
                </button>
        );
    }

    renderSelect(name, lebel, placeholder, options ) {
        const { data, errors } = this.state;
        return(
            <Select
            name={name}
            placeholder={placeholder}
            value={data[name]}
            label={lebel}
            options={options}
            onChange={this.handleChange}
            error={errors[name]}
        />
        );
    }
    
    renderInput(name, lebel, placeholder, type= 'text') {
        const { data, errors } = this.state;
        return(
            <Input
            name={name}
            placeholder= {placeholder}
            value={data[name]}
            label={lebel}
            onChange={this.handleChange}
            type={type}
            error={errors[name]}
        />
        )
    }
}

export default Form;