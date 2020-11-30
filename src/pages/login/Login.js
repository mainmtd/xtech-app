import React from 'react'
import { ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup'
import axios from 'axios';
import {history} from '../../history'

import './Login.css';
import logo from '../../images/LogoXTech.png'

const Login = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:3001/v1/api/auth', values)
            .then(resp => {
                const {data} = resp;
                if(data){
                    localStorage.setItem('app-token', data)
                    history.push({pathname: '/'})
                }
            })
    }
    const validations = yup.object().shape({
        user: yup.string().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>
            <div className="Login-Container">
                <img src={logo} className="Login-Logo"alt=""/>
                <p className="Login-Welcome">Welcome to X-tech!</p>
                <Formik initialValues={{}} 
                onSubmit={handleSubmit}
                validationSchema={validations}>
                    <Form className="Login">
                        <div className="Login-Group">
                            <ErrorMessage 
                                component="div" 
                                name="user" 
                                className="Login-Error"
                            />
                            <Field 
                                name="user"
                                placeholder="Username"
                                className="Login-Field"
                            />

                        </div>
                        <div className="Login-Group">
                            <ErrorMessage 
                                component="div" 
                                name="password" 
                                className="Login-Error"
                            />
                            <Field 
                                name="password"
                                type="password"
                                placeholder="Password" 
                                className="Login-Field"
                            />

                        </div>
                    
                        <button className="Login-Btn" type="submit">Login</button>
                    </Form>
                </Formik>
            </div>

            
        </>
    )
    
}



export default Login;