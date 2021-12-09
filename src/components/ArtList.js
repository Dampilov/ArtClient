import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import { Row } from 'react-bootstrap';
import ArtItem from './ArtItem';

const ArtList = observer( () => {
    const {art} = useContext(Context)
    return (
        <Row className="d-flex">
            {art.arts.map(art => 
                <ArtItem key={art.id} art={art}/>
            )}
        </Row>
    );
});

export default ArtList;