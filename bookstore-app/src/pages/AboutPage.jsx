import React from 'react';
import { Link } from 'react-router-dom';

//import './style/BookDetailPage.css'

const AboutPage = () => {
    return(
        <div>
            <h1>Welcome to the AboutPage</h1>
            <p> This is the Book of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/contact" >contact</Link>
            {/*<Link to="/contact" className="view-all-link"></Link>*/}
        </div>
    );
}
export default AboutPage;