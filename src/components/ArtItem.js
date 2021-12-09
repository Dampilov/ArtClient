import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import { ART_ROUTE } from '../utils/consts';

const ArtItem = ({art}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mb-4"} onClick={() => navigate(ART_ROUTE + '/' + art.id)}>
            <Card style={{maxWidth: 200, cursor: 'pointer', alignItems: 'center', margin: 'auto'}} border={'light'}>
                <Image width={'100%'} height={'100%'} src={art.img}/>
                <div>
                    {art.name}
                </div>
            </Card>
        </Col>
    );
};

export default ArtItem;