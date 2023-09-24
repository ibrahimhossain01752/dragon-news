import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button className='mb-2' variant="primary"><FaGoogle />Login with Google</Button>
            <Button variant="secondary"><FaGithub />Login with GitHub</Button>
        <div>
            <h4>Find us on</h4>
    <ListGroup>
      <ListGroup.Item><FaFacebook />Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
    </ListGroup>
        </div>
        <QZone></QZone>
        </div>
       
    );
};

export default RightNav;