import React from 'react';
import './About.scss';
import Footer from "../Footer/Footer";


export default function About() {
    return (
        <React.Fragment>
<div>
        <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
       <Footer></Footer>
       </div>
       </React.Fragment>

        );
}