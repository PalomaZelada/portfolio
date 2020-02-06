import React from 'react';
import '../App.css';
import Logo from './intro';
import Aboutme from './title';
import Navbar1 from './Navbar';


class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Navbar1 />
                <Logo />
                <Aboutme />
            </div>
        )
    }
}

export default Home;