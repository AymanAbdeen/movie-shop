import React from 'react';
import './PageNotFound.scss';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export default function PageNotFound() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                </div>
                        <div className="error-actions">
                            <Link to={'/'}> <span className="glyphicon glyphicon-home"></span>
                                <p className="btn btn-primary btn-lg">
                                    Take Me Home </p></Link>
                            <p className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-envelope"></span> Contact Support </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}