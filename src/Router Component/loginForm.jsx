import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './commonRoute/form';
import bgimage from './../image/bg-movies.png'
class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
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
                     .min(6)
                    .required()
                    .label('Password')
            // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
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
                           <div className="d-flex justify-content-center mt-5">
                                {this.renderButton("Login")}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;