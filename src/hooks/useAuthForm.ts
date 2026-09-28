import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { LoginFormValues, AuthFormState } from '../types/auth';

export const useAuthForm = (initialValues?: Partial<LoginFormValues>) => {
  const [state, setState] = useState<AuthFormState>({
    values: {
      email: initialValues?.email || '',
      password: initialValues?.password || '',
      rememberMe: initialValues?.rememberMe ?? true,
    },
    showPassword: false,
    isSubmitting: false,
    errorMessage: null,
    successMessage: null,
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { id, name, value, type, checked } = e.target;
    const key = name || id;

    setState((prev) => ({
      ...prev,
      errorMessage: null,
      values: {
        ...prev.values,
        [key]: type === 'checkbox' ? checked : value,
      },
    }));
  }, []);

  const toggleShowPassword = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>, onSuccess?: (values: LoginFormValues) => void) => {
      e.preventDefault();
      
      const { email, password } = state.values;
      if (!email || !email.includes('@')) {
        setState((prev) => ({
          ...prev,
          errorMessage: 'Please enter a valid corporate email address (e.g., name@godrej.com).',
        }));
        return;
      }

      if (!password) {
        setState((prev) => ({
          ...prev,
          errorMessage: 'Please enter your password.',
        }));
        return;
      }

      setState((prev) => ({ ...prev, isSubmitting: true, errorMessage: null }));

      try {
        // Simulate async authentication request
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log('Successfully authenticated:', state.values);

        setState((prev) => ({
          ...prev,
          isSubmitting: false,
          successMessage: 'Sign in successful! Redirecting to Orbiter Workspace...',
        }));

        if (onSuccess) {
          onSuccess(state.values);
        }
      } catch (err) {
        setState((prev) => ({
          ...prev,
          isSubmitting: false,
          errorMessage: 'Authentication failed. Please check your credentials.',
        }));
      }
    },
    [state.values]
  );

  const handleSsoLogin = useCallback(() => {
    console.log('Initiating Microsoft SSO login...');
    alert('Redirecting to Godrej Microsoft Azure AD SSO portal...');
  }, []);

  return {
    values: state.values,
    showPassword: state.showPassword,
    isSubmitting: state.isSubmitting,
    errorMessage: state.errorMessage,
    successMessage: state.successMessage,
    handleChange,
    toggleShowPassword,
    handleSubmit,
    handleSsoLogin,
  };
};
