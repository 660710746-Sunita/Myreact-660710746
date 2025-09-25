import React from 'react';
import { Link } from 'react-router-dom';

//import './style/BookDetailPage.css'

const ContactPage = () => {
    return(
        <div>
            <h1>Welcome to the ContactPage</h1>
            <p> This is the Book of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/books" >books</Link>
            {/*<Link to="/books" className="view-all-link"></Link>*/}
        </div>
    );
}
export default ContactPage;