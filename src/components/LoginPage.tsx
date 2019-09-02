import React from 'react'
import {Link} from 'react-router-dom'
import { useStateValue } from '../state/state';
import styled from 'styled-components';

import {createLoginSession, getPublic1} from "../axApi";

//for explanation see
//https://jasonwatmore.com/post/2018/09/11/react-basic-http-authentication-tutorial-example#login-page-jsx

export default function LoginPage () {
    const [{loginState}, dispatch] = useStateValue();

    const handleChange = (e:any) => {
        //updates the state value for that field
        dispatch({type: 'UPDATE_LOGIN_FIELD', payload: e.target})
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        console.log('pressed submit, with values',loginState)
        //createLogin session should take a credentials argument
        await createLoginSession() //dispatch some state action before this

        //put state change logic and login submit request here
    }
    //add css for component here
    const LogginWrapper = styled.div`
        margin: auto;
        width: 50%;
        width: 1000px;
        .alert-info {
            background-color: pink;
        }
  `

    return (
        <LogginWrapper>
            <h1>Login page </h1>
            <div >
                <h1>#####This is not yet working##### </h1>
                <div className="alert alert-info">
                    Username: test<br />
                    alert to be used for validations later
                </div>
                <form name="form" onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="email">Username</label>
                        <input type="text" className="form-control" name="email"
                        value={loginState.email} onChange={handleChange} />
                        {loginState.submitted && !loginState.email &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div >
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password"
                        value={loginState.password} onChange={handleChange} />
                        {loginState.submitted && !loginState.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" disabled={loginState.loading}>Login</button>
                        {loginState.loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJ
                            CQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdG
                            ggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIO
                            ggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAA
                            ACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXX
                            f7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJ
                            DMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAI
                            fkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGq
                            RoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunI
                            nK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAA
                            Ah+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradyleso
                            jEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi6
                            3P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpE
                            AACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMT
                            CpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                    {loginState.error &&
                        <div className={'alert alert-danger'}>{loginState.error}</div>
                    }
                </form>
            </div>
        
        </LogginWrapper>

    )
  }
