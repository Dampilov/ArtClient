import React from 'react';
import {Col, Container, Image, Card, Row} from 'react-bootstrap'

const ArtPage = () => {
    const art = {id: 5, name: 'Зеленое поле', views: 0, likes: 0, img: 'https://www.rabstol.net/uploads/gallery/main/354/rabstol_net_fields_04.jpg'}
    return (
        <Container className="mt-4">
            <Row mt={4}>
                <Col>
                    <Card style={{maxWidth: '70%', cursor: 'pointer', alignItems: 'center', margin: 'auto'}} border={'light'}>
                        <Image width={'100%'} height={'100%'} src={art.img}/>
                        <div>
                            {art.name}
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row mt={4}>
                <Col>
                    <Card style={{maxWidth: '70%', cursor: 'pointer', alignItems: 'center', margin: 'auto'}} border={'light'}>
                        <Image width={'100%'} height={'100%'} src={art.img}/>
                        <div>
                            {art.name}
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ArtPage;