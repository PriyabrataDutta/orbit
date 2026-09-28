import React from 'react';
import { useAuthForm } from '../../../hooks/useAuthForm';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Alert } from '../../common/Alert/Alert';
import './LoginForm.css';

export const LoginForm: React.FC = () => {
  const {
    values,
    showPassword,
    isSubmitting,
    errorMessage,
    successMessage,
    handleChange,
    toggleShowPassword,
    handleSubmit,
    handleSsoLogin,
  } = useAuthForm();

  return (
    <div className="card">
      <h1>Welcome Back</h1>
      <p className="hint">Sign in to access your enterprise AI workspace</p>

      {errorMessage && <Alert type="error" message={errorMessage} />}
      {successMessage && <Alert type="success" message={successMessage} />}

      <form onSubmit={(e) => handleSubmit(e)} noValidate>
        <Input
          id="email"
          name="email"
          type="email"
          label="Corporate Email"
          autoComplete="username"
          placeholder="name@godrej.com"
          value={values.email}
          onChange={handleChange}
          required
          icon={
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3.5 6.5L12 13l8.5-6.5" />
            </svg>
          }
        />

        <Input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          autoComplete="current-password"
          placeholder="•••••••"
          value={values.password}
          onChange={handleChange}
          required
          icon={
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
              <rect x="5" y="10" width="14" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
            </svg>
          }
          actionIcon={
            <button
              type="button"
              className="eye"
              id="togglePw"
              onClick={toggleShowPassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
                <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
                {!showPassword && <path id="eyeSlash" d="M4 4l16 16" />}
              </svg>
            </button>
          }
        />

        <div className="row">
          <label className="check">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={values.rememberMe}
              onChange={handleChange}
            />
            Remember me
          </label>
          <a href="#forgot-password">Forgot password?</a>
        </div>

        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Signing In...' : 'Sign In'}
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Button>
      </form>

      <div className="or">OR</div>

      <Button type="button" variant="sso" onClick={handleSsoLogin}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#4f35e6" strokeWidth="1.8" strokeLinecap="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 14h3" />
        </svg>
        Sign in with Microsoft (SSO)
      </Button>

      <div className="trust">
        <div>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinejoin="round">
            <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          MFA<br />Protected
        </div>
        <div>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="9" cy="8" r="3.5" />
            <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
            <circle cx="17" cy="9" r="2.6" />
            <path d="M16.5 14.2c2.8.2 5 2.2 5 5" />
          </svg>
          Role-Based<br />Access
        </div>
        <div>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
            <rect x="5" y="10" width="14" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
          </svg>
          Zero Trust<br />Security
        </div>
      </div>

      <div className="card-foot">
        <a href="#support">Need help? Contact IT Support</a>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
      </div>
    </div>
  );
};
