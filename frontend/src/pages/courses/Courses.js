import React from 'react';

const Courses = () => {
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
            fontSize: '3rem',
            marginBottom: '1rem',
            fontWeight: '600',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        },
        subtitle: {
            fontSize: '1.3rem',
            opacity: '0.9',
            margin: '0'
        },
        content: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        coursesGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
        },
        courseCard: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
        },
        courseIcon: {
            fontSize: '3rem',
            marginBottom: '1rem'
        },
        courseTitle: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
            fontWeight: '600'
        },
        courseDescription: {
            opacity: '0.9',
            marginBottom: '1.5rem',
            lineHeight: '1.6'
        },
        courseFeatures: {
            listStyle: 'none',
            padding: '0',
            margin: '0'
        },
        feature: {
            padding: '0.5rem 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        },
        featureLast: {
            padding: '0.5rem 0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        },
        enrollButton: {
            background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '1.5rem',
            width: '100%'
        }
    };

    // Sample courses data
    const courses = [
        {
            id: 1,
            title: 'Web Development',
            icon: '💻',
            description: 'Learn modern web development with HTML, CSS, JavaScript and React',
            features: ['HTML & CSS', 'JavaScript', 'React.js', 'Node.js'],
            duration: '8 weeks'
        },
        {
            id: 2,
            title: 'Data Science',
            icon: '📊',
            description: 'Master data analysis, visualization and machine learning',
            features: ['Python', 'Pandas', 'Matplotlib', 'Machine Learning'],
            duration: '10 weeks'
        },
        {
            id: 3,
            title: 'Mobile Development',
            icon: '📱',
            description: 'Build cross-platform mobile applications',
            features: ['React Native', 'Flutter', 'API Integration', 'App Deployment'],
            duration: '12 weeks'
        },
        {
            id: 4,
            title: 'UI/UX Design',
            icon: '🎨',
            description: 'Create beautiful and user-friendly interfaces',
            features: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
            duration: '6 weeks'
        },
        {
            id: 5,
            title: 'Digital Marketing',
            icon: '📈',
            description: 'Learn digital marketing strategies and tools',
            features: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
            duration: '8 weeks'
        },
        {
            id: 6,
            title: 'Cloud Computing',
            icon: '☁',
            description: 'Master cloud platforms and deployment',
            features: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
            duration: '10 weeks'
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Explore Our Courses</h1>
                <p style={styles.subtitle}>Choose from our comprehensive learning paths</p>
            </div>
            
            <div style={styles.content}>
                <div style={styles.coursesGrid}>
                    {courses.map((course, index) => (
                        <div 
                            key={course.id}
                            style={styles.courseCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <div style={styles.courseIcon}>{course.icon}</div>
                            <h3 style={styles.courseTitle}>{course.title}</h3>
                            <p style={styles.courseDescription}>{course.description}</p>
                            
                            <ul style={styles.courseFeatures}>
                                {course.features.map((feature, featureIndex) => (
                                    <li 
                                        key={featureIndex}
                                        style={featureIndex === course.features.length - 1 ? styles.featureLast : styles.feature}
                                    >
                                         {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            <p style={{ opacity: '0.8', marginTop: '1rem' }}>
                                <strong>Duration:</strong> {course.duration}
                            </p>
                            
                            <button 
                                style={styles.enrollButton}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            >
                                Enroll Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;