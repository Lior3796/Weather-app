import React from 'react';
import "../../styles/style.css";

export const Footer = () => {
    const footerDataObject = {
        main: {
            headline: "Olympic channel",
            data: ["Olympic games", "Tokyo 2020", "Results & Medals", "Replays & Highlights", "All Olympic Games"]
        }
    }
    return (
        <div className="Footer-container">
            <div className="social-links">
                <div className="olympic-info">
                    <ul>
                        <li>Cookie Policy</li>
                        <li>Cookie Settings</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

