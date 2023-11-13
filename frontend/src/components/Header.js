import React from 'react';
import {Container,Nav, Navbar} from 'react-bootstrap'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

import Home from '../Pages/Home'
import Second from '../Pages/List_Reservation';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Mask group.png'

class Header extends React.Component{
    render(){
      return (
        <>
            <Navbar collapseOnSelect expand = "md" bg="dark" variant="white">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            height="60"
                            width="60"
                            className='d-inline-block aling-top'
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mr-auto'>
                            <Nav.Link href = "/" className='text-light bg-dark'>Бронь</Nav.Link>
                            <Nav.Link href ="/list_reservation" className='text-white bg-dar'>Список броней</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/list_reservation" element={<Second/>}/>
                </Routes>
            </Router>

        </>
      )
    }
  }


export default Header
