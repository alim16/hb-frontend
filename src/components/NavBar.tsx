import React from 'react'
import {Link} from 'react-router-dom'
import  {Navbar, Container, Nav}  from "react-bootstrap";
import './navbar.css'

export default function NavBar () {

    return (
        <div>
            <Navbar.Brand href="/" ><h1>App Header</h1></Navbar.Brand>
            <Navbar expand="lg" variant="dark" bg="dark">
                 <Nav style={{fontSize: '25px'}}>
                    <Nav.Item ><Link to="/users">Users</Link></Nav.Item>
                    <Nav.Item ><Link to="/items">Items</Link></Nav.Item>
                    <Nav.Item ><Link to="/login">Login</Link></Nav.Item>             
                </Nav>  
            </Navbar>
        </div>
    )
  }
