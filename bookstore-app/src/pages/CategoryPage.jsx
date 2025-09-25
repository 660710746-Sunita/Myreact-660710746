import React from 'react';
import { Link } from 'react-router-dom';

//import './style/BookListPage.css'

const CategoryPage = () => {
    return(
        <div>
            <h1>Welcome to the CategoryPage</h1>
            <p> This is the Book of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/about" >About</Link>
            {/*<Link to="/about" className="view-all-link"></Link>*/}
        </div>
    );
}
export default CategoryPage;