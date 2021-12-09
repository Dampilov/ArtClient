import React, { useContext } from 'react';
import { Context } from '../index';
import { Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import NavBar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'

const SiteHeader = observer( () => {
    const {user} = useContext(Context)
    return (
        <NavBar bg="dark" expand="lg">
            <Container fluid>
                <NavLink style={{color: 'white', textDecoration: 'none', fontSize: '20px'}} to={MAIN_ROUTE}>Сайт</NavLink>
                <NavBar.Toggle aria-controls="navbarScroll" />
                <NavBar.Collapse id="navbarScroll">
                <Form className="me-auto d-flex" style={{marginLeft: '10px'}}>
                    <FormControl
                    type="search"
                    placeholder="Поиск"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Поиск</Button>
                </Form>
                    {user.isAuth ? 
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Button variant="outline-success">Панель</Button>
                            <Button variant="outline-success" className="ms-2">Выйти</Button>
                        </Nav>
                        :
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Button variant="outline-success" onClick={() => user.setIsAuth(true)}>Войти</Button>
                        </Nav>
                    }
                </NavBar.Collapse>
            </Container>
        </NavBar>
    );
});

export default SiteHeader;