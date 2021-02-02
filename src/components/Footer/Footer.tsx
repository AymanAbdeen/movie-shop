import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';
import 'bootstrap/dist/css/bootstrap.css';


export default function Footer() {
    return (
        <div className="page-footer font-small cyan darken-3">
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-1 col-md-4">
                            <h6>About</h6>
                            <p className="text-justify mb-2"> <i>CODE WANTS TO BE SIMPLE </i> A String, representing the text of the node and all its descendants. Returns null if the element is a document, a document type, or a notation.</p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="/">Action</a></li>
                                <li><a href="/">Comedy</a></li>
                                <li><a href="/">Drama</a></li>
                                <li><a href="/">Fantasy</a></li>
                                <li><a href="/">Horror</a></li>
                                <li><a href="/">Mystery</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-9 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><Link to={'/About'}>About Us</Link></li>
                                <li><Link to={'/Contact'}>Countact Us</Link></li>
                                <li><a href="/Contribute">Contribute</a></li>
                                <li><a href="/?">Privacy Policy</a></li>
                                <li><a href="/?">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-2">© 2020 Copyright:<a href="/"> Example.com</a>
            </div>
        </div>

    );
}