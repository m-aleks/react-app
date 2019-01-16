import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
    return (
        <ul className="homepage_list">
            <li className="homepage_list_item">
                <h2><Link to="/list" className="homepage_list_link">List of films</Link></h2>
            </li>
            <li className="homepage_list_item">
            <h2><Link to="/dashboard" className="homepage_list_link">Dashboard</Link></h2>
            </li>
        </ul>
    );
}