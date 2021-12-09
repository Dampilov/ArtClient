import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ArtList from '../components/ArtList';

const Main = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col mt={9}>
                    <ArtList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;