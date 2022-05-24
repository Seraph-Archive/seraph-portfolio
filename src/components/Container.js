import React, { useState } from "react";
import Header from "./header";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./footer";
import AboutMe from "./pages/AboutMe";


export default function Container() {
    const [currentPage, setCurrentPage] = useState('Portfolio')

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}