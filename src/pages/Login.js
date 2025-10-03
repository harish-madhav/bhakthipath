import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { login as reduxLogin } from '../actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { login, signup } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redirect based on admin flag after Redux login
  useEffect(() => {
    // no-op here; routing handled after submit
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setError('');
      setLoading(true);

      if (isSignUp) {
        await signup(email, password);
        // After signup, log in and update Redux
        const userCredential = await login(email, password);
        const user = userCredential.user;
        const isAdmin = user.email === 'admin@gmail.com';
        const userInfo = { email: user.email, uid: user.uid, displayName: user.displayName || '' };
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user: userInfo, isAdmin } });
        console.log('Account created successfully');
      } else {
        // Use Redux login action to update state
        await dispatch(reduxLogin(email, password));
        console.log('Login successful');
      }
      // After login, route by admin email
      if (!isSignUp) {
        if (email === 'admin@gmail.com') navigate('/admin');
        else navigate('/dashboard');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      let errorMessage = 'An error occurred';
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered. Try logging in instead.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email. Please sign up first.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password. Please try again.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Please try again later.';
          break;
        default:
          errorMessage = error.message || 'Authentication failed. Please try again.';
      }
      setError(errorMessage);
      setLoading(false);
    }
  }

  function toggleMode() {
    setIsSignUp(!isSignUp);
    setError('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg" style={{ width: '400px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="card-title text-primary">🕉️ BhaktiPath</h2>
            <p className="text-muted">
              {isSignUp ? 'Create your account' : 'Sign in to your account'}
            </p>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={loading}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={loading}
                minLength="6"
              />
              <div className="form-text">
                Password must be at least 6 characters long
              </div>
            </div>

            <div className="d-grid gap-2 mb-3">
              <button
                type="submit"
                className={`btn ${isSignUp ? 'btn-success' : 'btn-primary'}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    {isSignUp ? 'Creating Account...' : 'Signing In...'}
                  </>
                ) : (
                  isSignUp ? 'Create Account' : 'Sign In'
                )}
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={toggleMode}
                disabled={loading}
              >
                {isSignUp
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign Up"
                }
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <small className="text-muted">
              <i className="bi bi-shield-check me-1"></i>
              Secure authentication powered by Firebase
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
