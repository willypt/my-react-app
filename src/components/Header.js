import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>This is my own Header</h1>
                <p>
                    <Link to="/">Home</Link> | <Link to="/people">People</Link>
                </p>
            </div>
        );
    }
}

export default Header

