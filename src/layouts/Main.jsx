import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RigthNav from '../pages/Shared/RigthNav/RigthNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>
                    
                    <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RigthNav></RigthNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

            
        </div>
    );
};

export default Main;