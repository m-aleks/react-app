import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
    return (
        <ul>
            <li>
                <Link to="/list">List of films</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    );
}