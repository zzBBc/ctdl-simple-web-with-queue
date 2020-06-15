import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './App.css';
import AuthorApp from './component/AuthorApp';

class App extends Component{
  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="http://localhost:3000/">
                    <img
                        alt="logo"
                        src="logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'     '}
                    Queue
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
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
