// import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Button, ListGroup } from "react-bootstrap";
import QZon from '../QZon/QZon';
import bgPng from  '../../../assets/bg.png' ;
import './RightNav.css'

const RigthNav = () => {
    return (
        <div>
            <h4> Login with</h4>
            <Button variant="outline-primary" size='lg'><FaGoogle /> Login with Google</Button>
            <Button variant="outline-dark" size='lg' > <FaGithub /> Login with Github</Button>
            <div className="my-4">
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facbook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZon/>
            <div className='text-center bgpng'>
                <img src={bgPng} alt="" />
                <div className='bgpngDetils'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>{' '}
                </div>

            </div>
        </div>
    );
};

export default RigthNav;