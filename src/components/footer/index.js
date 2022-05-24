import React from "react";
import '../assets/css/style.css';

function Footer () {
    return (
        <div className="footer">
            <footer className="bg-dark text-center">
                <div className="container p-4">
                    <a className="btn btn-dark btn-floating m-1 " href="https://github.com/Seraph-Archive" role="button">github</a>
                    <a className="btn btn-dark btn-floating m-1 " href="https://www.linkedin.com/in/ethan-clary-942a80230/" role="button">linkedin</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;