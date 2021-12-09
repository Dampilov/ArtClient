import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { Card, Container, Form, Button} from 'react-bootstrap'
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
                <Card
                    className="p-5"
                    style={{width: "600px"}}
                >
                    <h3 className="m-auto">{ isLogin ? 'Авторизация' : 'Регистрация' }</h3>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-4"
                            placeholder="Введите логин"
                        />
                        <Form.Control
                            className="mt-4"
                            placeholder="Введите пароль"
                        />
                        { isLogin ? 
                            <div className="d-flex justify-content-between flex-wrap-nowrap mt-3">
                                <NavLink
                                    className="p-0"
                                    to={REGISTRATION_ROUTE}
                                >Зарегистрироваться</NavLink>
                                <Button
                                    variant="outline-success"
                                >
                                    Войти
                                </Button>
                            </div>
                            :
                            <div className="d-flex justify-content-between flex-wrap-nowrap mt-3">
                                <NavLink
                                    className="p-0"
                                    to={LOGIN_ROUTE}
                                >Войти</NavLink>
                                <Button
                                    variant="outline-success"
                                >
                                    Зарегистрироваться
                                </Button>
                            </div>
                        }
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Auth;