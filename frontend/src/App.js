import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/common/Header';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Courses from './pages/courses/Courses';
import Profile from './pages/Profile';
// import Progress from './pages/Progress'; // KEEP THIS COMMENTED OUT
import './App.css';

// Import TempGoals from Dashboard
import { TempGoals } from './pages/dashboard/Dashboard';

// ✅ PROTECTEDROUTE COMPONENT DEFINITION
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to='/login' />;
};

// ✅ REPLACE TEMPPROGRESS WITH THIS ENHANCED PROGRESS COMPONENT
const Progress = () => {
  const progressData = [
    { course: 'Web Development', progress: 75, color: '#4CAF50' },
    { course: 'Data Science', progress: 50, color: '#2196F3' },
    { course: 'Mobile Development', progress: 25, color: '#d400ffff' },
    { course: 'UI/UX', progress: 90, color: '#b02772ff' },
    { course: 'Digital Marketing', progress: 30, color: '#FF9800' },
    { course: 'Cloud Computing', progress: 65, color: '#27a2b0ff' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontWeight: '600'
    },
    subtitle: {
      fontSize: '1.3rem',
      opacity: '0.8'
    },
    progressGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    progressCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '2rem',
      borderRadius: '15px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    courseTitle: {
      fontSize: '1.4rem',
      marginBottom: '1rem',
      fontWeight: '600'
    },
    progressBar: {
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '10px',
      height: '20px',
      marginBottom: '0.5rem',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      borderRadius: '10px',
      transition: 'width 0.5s ease'
    },
    progressText: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '1rem'
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginTop: '3rem',
      maxWidth: '1200px',
      margin: '3rem auto 0'
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '1.5rem',
      borderRadius: '10px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: '1rem',
      opacity: '0.8'
    }
  };

  const overallProgress = Math.round(
    progressData.reduce((sum, course) => sum + course.progress, 0) / progressData.length
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Your Learning Progress</h1>
        <p style={styles.subtitle}>Track your journey and celebrate your achievements</p>
      </div>

      <div style={styles.stats}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>{overallProgress}%</div>
          <div style={styles.statLabel}>Overall Progress</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>{progressData.length}</div>
          <div style={styles.statLabel}>Courses Enrolled</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>
            {progressData.filter(course => course.progress === 100).length}
          </div>
          <div style={styles.statLabel}>Courses Completed</div>
        </div>
      </div>

      <div style={styles.progressGrid}>
        {progressData.map((course, index) => (
          <div key={index} style={styles.progressCard}>
            <h3 style={styles.courseTitle}>{course.course}</h3>
            <div style={styles.progressBar}>
              <div 
                style={{
                  ...styles.progressFill,
                  width: `${course.progress}%`,
                  background: course.color
                }}
              />
            </div>
            <div style={styles.progressText}>
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Create a layout component that conditionally shows header
const AppLayout = () => {
  const location = useLocation();
  // Don't show header on these pages
  const showHeader = !['/', '/register', '/dashboard', '/profile', '/courses', '/login', '/progress', '/goals'].includes(location.pathname);
  
  return (
    <div className='App'>
      {showHeader && <Header />}
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route 
            path='/dashboard' 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path='/courses' element={<Courses />} />
          <Route 
            path='/profile' 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/progress' 
            element={
              <ProtectedRoute>
                <Progress /> {/* ✅ NOW USING ENHANCED PROGRESS COMPONENT */}
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/goals' 
            element={
              <ProtectedRoute>
                <TempGoals />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}

export default App;
