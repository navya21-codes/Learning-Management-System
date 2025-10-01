import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user } = useAuth();
    
    // Inline styles
    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '2rem',
            fontFamily: 'Arial, sans-serif',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        profileCard: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '3rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '500px',
            textAlign: 'center'
        },
        header: {
            marginBottom: '2rem'
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '0.5rem',
            fontWeight: '600',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        },
        subtitle: {
            fontSize: '1.2rem',
            opacity: '0.9',
            marginBottom: '2rem'
        },
        profileInfo: {
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '2rem'
        },
        infoItem: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        },
        infoItemLast: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0'
        },
        label: {
            fontWeight: '600',
            fontSize: '1.1rem',
            opacity: '0.9'
        },
        value: {
            fontWeight: '500',
            fontSize: '1.1rem'
        },
        roleBadge: {
            background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            textTransform: 'capitalize'
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '2rem'
        },
        statCard: {
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '1.5rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        },
        statNumber: {
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '0.5rem'
        },
        statLabel: {
            fontSize: '0.9rem',
            opacity: '0.8'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.profileCard}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Profile</h1>
                    <p style={styles.subtitle}>Your account information</p>
                </div>
                
                <div style={styles.profileInfo}>
                    <div style={styles.infoItem}>
                        <span style={styles.label}>Name:</span>
                        <span style={styles.value}>{user?.name}</span>
                    </div>
                    
                    <div style={styles.infoItem}>
                        <span style={styles.label}>Email:</span>
                        <span style={styles.value}>{user?.email}</span>
                    </div>
                    
                    <div style={styles.infoItemLast}>
                        <span style={styles.label}>Role:</span>
                        <span style={styles.roleBadge}>{user?.role}</span>
                    </div>
                </div>

                <div style={styles.statsGrid}>
                    <div style={styles.statCard}>
                        <div style={styles.statNumber}>0</div>
                        <div style={styles.statLabel}>Courses</div>
                    </div>
                    
                    <div style={styles.statCard}>
                        <div style={styles.statNumber}>0</div>
                        <div style={styles.statLabel}>Completed</div>
                    </div>
                    
                    <div style={styles.statCard}>
                        <div style={styles.statNumber}>0%</div>
                        <div style={styles.statLabel}>Progress</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;