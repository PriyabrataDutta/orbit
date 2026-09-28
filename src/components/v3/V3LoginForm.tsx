import React from 'react';
import { useAuthForm } from '../../hooks/useAuthForm';
import { 
  ShieldCheck, Lock, Mail, Eye, EyeOff, ArrowRight, CheckCircle2, 
  AlertCircle, Users
} from 'lucide-react';
import './V3LoginForm.css';

export const V3LoginForm: React.FC = () => {
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
    <div className="v3-auth-card-container">
      <div className="v3-auth-card">
        {/* Header */}
        <div className="v3-auth-header">
          <span className="v3-welcome-subtitle">Welcome to</span>
          <h2 className="v3-brand-title-dominant">Orbiter</h2>
          <p className="v3-auth-desc">
            Sign in to access your enterprise AI workspace
          </p>
        </div>

        {/* Errors / Success Alerts */}
        {errorMessage && (
          <div className="v3-alert v3-alert-error" role="alert">
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="v3-alert v3-alert-success" role="alert">
            <CheckCircle2 size={16} />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Microsoft SSO Primary Button */}
        <button
          type="button"
          className="v3-sso-primary-btn"
          onClick={handleSsoLogin}
        >
          <div className="v3-sso-content-left">
            <div className="v3-ms-grid-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z" />
                <path fill="#81bc06" d="M12 1h10v10H12z" />
                <path fill="#05a6f0" d="M1 12h10v10H1z" />
                <path fill="#ffba08" d="M12 12h10v10H1z" />
              </svg>
            </div>
            <span className="v3-sso-text">Continue with Microsoft</span>
          </div>
          <ArrowRight size={18} className="v3-sso-arrow" />
        </button>

        {/* Divider */}
        <div className="v3-or-divider">
          <span className="v3-line" />
          <span className="v3-or-text">OR</span>
          <span className="v3-line" />
        </div>

        {/* Login Form */}
        <form onSubmit={(e) => handleSubmit(e)} noValidate className="v3-login-form">
          {/* Work Email */}
          <div className="v3-form-group">
            <label htmlFor="v3-email" className="v3-field-label">
              Work Email
            </label>
            <div className="v3-input-box">
              <Mail size={18} className="v3-input-prefix-icon" />
              <input
                id="v3-email"
                name="email"
                type="email"
                className="v3-text-input"
                placeholder="name@godrej.com"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="v3-form-group">
            <label htmlFor="v3-password" className="v3-field-label">
              Password
            </label>
            <div className="v3-input-box">
              <Lock size={18} className="v3-input-prefix-icon" />
              <input
                id="v3-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="v3-text-input"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="v3-password-toggle-btn"
                onClick={toggleShowPassword}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="v3-options-row">
            <label className="v3-checkbox-container">
              <input
                type="checkbox"
                name="rememberMe"
                checked={values.rememberMe}
                onChange={handleChange}
                className="v3-custom-checkbox"
              />
              <span className="v3-checkbox-text">Remember me</span>
            </label>

            <a href="#forgot-password" className="v3-forgot-btn">
              Forgot password?
            </a>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="v3-submit-cta-btn"
          >
            {isSubmitting ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign in</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Security Footer (3 columns matching screenshot) */}
        <div className="v3-security-strip">
          <div className="v3-sec-item">
            <div className="v3-sec-icon-circle">
              <ShieldCheck size={16} />
            </div>
            <span className="v3-sec-label">SSO<br/>Enabled</span>
          </div>

          <div className="v3-sec-item">
            <div className="v3-sec-icon-circle">
              <Lock size={16} />
            </div>
            <span className="v3-sec-label">Enterprise<br/>Security</span>
          </div>

          <div className="v3-sec-item">
            <div className="v3-sec-icon-circle">
              <Users size={16} />
            </div>
            <span className="v3-sec-label">Role-Based<br/>Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};
