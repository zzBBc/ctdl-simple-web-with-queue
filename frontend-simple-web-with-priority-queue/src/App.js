import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './App.css';
import AuthorApp from './component/AuthorApp';

class App extends Component{
  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{'     '}
          Priority Queue
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Link" id="basic-nav-dropdown">
              <NavDropdown.Item href="#recently">Recently</NavDropdown.Item>
              <NavDropdown.Item href="#Most">Most</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    
      <div className="container">
        <AuthorApp/>
      </div>
      </> 
    )
  }
}

export default App;
