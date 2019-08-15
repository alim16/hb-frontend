import React from 'react'
import {Link} from 'react-router-dom'
import { useStateValue } from '../state/state';

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

    return (
        <div> 
            <h1>Login page </h1>
            <div >
                <div className="alert alert-info">
                    Username: test<br />
                    alert to be used for validations later
                </div>
                <form name="form" onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="email">Username</label>
                        <input type="text" className="form-control" name="email" value={loginState.email} onChange={handleChange} />
                        {loginState.submitted && !loginState.email &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div >
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={loginState.password} onChange={handleChange} />
                        {loginState.submitted && !loginState.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" disabled={loginState.loading}>Login</button>
                        {loginState.loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                    {loginState.error &&
                        <div className={'alert alert-danger'}>{loginState.error}</div>
                    }
                </form>
            </div>
        
        </div>

    )
  }
