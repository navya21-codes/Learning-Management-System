import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Temporary Goals component
const TempGoals = () => {
    return (
        <div style={{padding: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', color: 'white'}}>
            <h1>Temporary Goals Page - Working!</h1>
            <p>This proves the routing works. The file encoding issue will be fixed separately.</p>
        </div>
    );
};

const Dashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    
    // Inline styles
    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '2rem',
            fontFamily: 'Arial, sans-serif',
            color: 'white'
        },
        header: {
            textAlign: 'center',
            marginBottom: '3rem',
            paddingTop: '2rem'
        },
        title: {
            fontSize: '3.5rem',
            marginBottom: '1rem',
            fontWeight: '600',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        },
        subtitle: {
            fontSize: '1.5rem',
            opacity: '0.9',
            margin: '0'
        },
        content: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        welcomeCard: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '3rem',
            borderRadius: '20px',
            textAlign: 'center',
            marginBottom: '3rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        },
        welcomeTitle: {
            fontSize: '2.2rem',
            marginBottom: '1rem',
            fontWeight: '600'
        },
        welcomeText: {
            fontSize: '1.2rem',
            opacity: '0.9',
            lineHeight: '1.6',
            margin: '0'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
        },
        infoCard: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer'
        },
        cardTitle: {
            fontSize: '1.6rem',
            marginBottom: '1rem',
            fontWeight: '600'
        },
        cardText: {
            opacity: '0.9',
            margin: '0',
            fontSize: '1.1rem'
        }
    };

    const handleCoursesClick = () => {
        navigate('/courses');
    };

    const handleProgressClick = () => {
        navigate('/progress');
    };

    const handleGoalsClick = () => {
        navigate('/goals');
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Welcome back, {user?.name}!</h1>
                <p style={styles.subtitle}>Your learning journey continues here</p>
            </div>
            
            <div style={styles.content}>
                <div style={styles.welcomeCard}>
                    <h2 style={styles.welcomeTitle}> Welcome to Your Dashboard</h2>
                    <p style={styles.welcomeText}>
                        This is your personalized learning space. Your courses, progress, and resources will appear here soon.
                    </p>
                </div>
                
                <div style={styles.grid}>
                    <div 
                        style={styles.infoCard}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                        }}
                        onClick={handleCoursesClick}
                    >
                        <h3 style={styles.cardTitle}>📚 Your Courses</h3>
                        <p style={styles.cardText}>Click to browse available courses</p>
                    </div>
                    
                    <div 
                        style={styles.infoCard}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                        }}
                        onClick={handleProgressClick}
                    >
                        <h3 style={styles.cardTitle}>📊 Progress</h3>
                        <p style={styles.cardText}>Track your learning journey</p>
                    </div>
                    
                    <div 
                        style={styles.infoCard}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                        }}
                        onClick={handleGoalsClick}
                    >
                        <h3 style={styles.cardTitle}>🎯 Goals</h3>
                        <p style={styles.cardText}>Set and manage your goals</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export both components
export { TempGoals };
export default Dashboard;