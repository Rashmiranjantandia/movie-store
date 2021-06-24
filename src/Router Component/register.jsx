import React, { Component } from 'react';
import Form from './commonRoute/form'
import Joi from 'joi-browser';
import bgimage from './../image/bg-movies.png'
class Register extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .min(6)
            .max(20)
            .required()
            .label('Username'),

        password: Joi.string()
            .alphanum()
            .min(5)
            .required()
            .label('Password'),
        name: Joi.string()
            .max(20)
            .required()
            .label('Name'),
    }

    doSubmit = () => {
        //Calling Server
        console.log("Submitted")
    }
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="row border rounded p-5 m-3">
                    <div className="col">
                        <img className="ml-5 mb-4 rounded" src={bgimage} width="80px" height="80px" alt="Not-Available" />
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput("username", "Username","Enter Username")}
                            {this.renderInput("password", "Password","Enter Password","password")}
                            {this.renderInput("name", "Name","Enter Name")}
                            <div className="d-flex justify-content-center mt-5">
                                {this.renderButton("Register")}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;