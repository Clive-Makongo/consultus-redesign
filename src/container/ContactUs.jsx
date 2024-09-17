import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="container">
            <h1 className="title">Contact Us</h1>

            <div className="card">
                <h2 className="card-title">Get in Touch</h2>
                <div className="card-content">
                    <div className="info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div>
                            <h3 className="info-title">Ankara Office</h3>
                            <address>
                                <p>KIZILIRMAK MAH.</p>
                                <p>1443 CAD. NO:25 B</p>
                                <p>IÇ KAPI NO: 8</p>
                                <p>ÇANKAYA/ANKARA/TÜRKIYE</p>
                            </address>
                        </div>
                    </div>

                    <div className="info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <a href="mailto:info@consultus.com.tr" className="email-link">
                            info@consultus.com.tr
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;