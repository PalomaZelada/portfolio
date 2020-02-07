import React from 'react';
import '../App.css';
import Logo from './intro';
import Aboutme from './title';
import Navbar1 from './Navbar';
import Button from 'react-bootstrap/Button';
import cv from '../images/cv_PalomaZelada.pdf';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Navbar1 />
                <Logo />
                <Aboutme />
                <div className="btn-cv">
                <Button href={cv} 
                target="blank" 
                variant="outline-primary">Ver Curriculum</Button>
                </div>
            </div>
        )
    }
}

export default Home;