import React from 'react';
import { useAuthForm } from '../../hooks/useAuthForm';
import { 
  ShieldCheck, Lock, Mail, Eye, EyeOff, ArrowRight, CheckCircle2, 
  AlertCircle, Users
} from 'lucide-react';
import './NextGenLoginForm.css';

export const NextGenLoginForm: React.FC = () => {
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
    <div className="ng-auth-card">
      {/* Login Card Header */}
      <div className="ng-auth-header">
        <span className="ng-welcome-subtitle">Welcome to</span>
        <h2 className="ng-brand-title-dominant">Orbiter</h2>
        <p className="ng-auth-desc">
          Sign in to access your enterprise AI workspace
        </p>
      </div>

      {/* Error & Success Messages */}
      {errorMessage && (
        <div className="ng-alert ng-alert-error" role="alert">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="ng-alert ng-alert-success" role="alert">
          <CheckCircle2 size={16} />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Microsoft SSO Button (First) */}
      <button
        type="button"
        className="ng-sso-primary-btn"
        onClick={handleSsoLogin}
      >
        <div className="ng-ms-grid-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 23 23">
            <path fill="#f35325" d="M1 1h10v10H1z" />
            <path fill="#81bc06" d="M12 1h10v10H12z" />
            <path fill="#05a6f0" d="M1 12h10v10H1z" />
            <path fill="#ffba08" d="M12 12h10v10H1z" />
          </svg>
        </div>
        <span className="ng-sso-text">Continue with Microsoft (SSO)</span>
        <ArrowRight size={18} className="ng-sso-arrow" />
      </button>

      {/* OR Divider */}
      <div className="ng-or-divider">
        <span className="ng-line" />
        <span className="ng-or-text">OR</span>
        <span className="ng-line" />
      </div>

      {/* Email & Password Login Form */}
      <form onSubmit={(e) => handleSubmit(e)} noValidate className="ng-login-form">
        {/* Work Email Field */}
        <div className="ng-form-group">
          <label htmlFor="ng-email-field" className="ng-field-label">
            Work Email
          </label>
          <div className="ng-input-box">
            <Mail size={18} className="ng-input-prefix-icon" />
            <input
              id="ng-email-field"
              name="email"
              type="email"
              className="ng-text-input"
              placeholder="name@godrej.com"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="ng-form-group">
          <label htmlFor="ng-password-field" className="ng-field-label">
            Password
          </label>
          <div className="ng-input-box">
            <Lock size={18} className="ng-input-prefix-icon" />
            <input
              id="ng-password-field"
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="ng-text-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="ng-password-toggle-btn"
              onClick={toggleShowPassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Remember me & Forgot Password */}
        <div className="ng-options-row">
          <label className="ng-checkbox-container">
            <input
              type="checkbox"
              name="rememberMe"
              checked={values.rememberMe}
              onChange={handleChange}
              className="ng-custom-checkbox"
            />
            <span className="ng-checkbox-text">Remember me</span>
          </label>

          <a href="#forgot-password" className="ng-forgot-btn">
            Forgot password?
          </a>
        </div>

        {/* Primary CTA Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="ng-submit-cta-btn"
        >
          {isSubmitting ? (
            <span className="ng-btn-loader-group">
              <span className="ng-loader-spinner" />
              <span>Authenticating...</span>
            </span>
          ) : (
            <>
              <span>Sign in</span>
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </form>

      {/* Bottom Security Indicators */}
      <div className="ng-security-strip">
        <div className="ng-sec-item">
          <ShieldCheck size={15} className="sec-icon" />
          <span>SSO Enabled</span>
        </div>
        <div className="ng-sec-divider" />
        <div className="ng-sec-item">
          <Lock size={15} className="sec-icon" />
          <span>Enterprise Security</span>
        </div>
        <div className="ng-sec-divider" />
        <div className="ng-sec-item">
          <Users size={15} className="sec-icon" />
          <span>Role-Based Access</span>
        </div>
      </div>
    </div>
  );
};
