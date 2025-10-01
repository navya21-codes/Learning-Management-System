import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome to <span className="highlight">Learning Management System</span>
                    </h1>
                    <p className="hero-subtitle">
                        Learn, Grow, and Succeed with our comprehensive courses
                    </p>
                    <div className="cta-buttons">
                        <Link to="/register" className="btn-primary">Get Started</Link>
                        <Link to="/courses" className="btn-secondary">Explore Courses</Link>
                    </div>
                </div>
                <div className="hero-graphic">
                    <div className="floating-elements">
                        <div className="circle-1"></div>
                        <div className="circle-2"></div>
                        <div className="circle-3"></div>
                    </div>
                </div>
            </div>
            
            <footer className="footer">
                <p>© 2025 Navya's Learning Management System.</p>
            </footer>
        </div>
    );
};

export default Home;