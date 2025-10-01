import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <div className='logo'>
            <Link to='/'>📚 LMS</Link>
          </div>
          
          <nav className='nav'>
            <Link to='/courses'>Courses</Link>
            
            {user ? (
              <>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/profile'>Profile</Link>
                <span className='welcome'>Welcome, {user.name}</span>
                <button onClick={handleLogout} className='logout-btn'>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
