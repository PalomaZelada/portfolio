import React from 'react';
import Logo from './intro';
import Aboutme from './title';
import Button from 'react-bootstrap/Button';
import cv from '../images/CV_PalomaZelada.pdf';
import './components.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class Home extends React.Component {
    render() {
        return (
            <ScrollableAnchor id="home">
            <div className="Home">
                <Logo />
                <Aboutme />
                <div className="btn-cv">
                <Button href={cv} 
                target="blank" 
                variant="primary">Ver Curriculum</Button>
                </div>
            </div>
                            
            </ScrollableAnchor>
        )
    }
}

export default Home;