export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthFormState {
  values: LoginFormValues;
  showPassword: boolean;
  isSubmitting: boolean;
  errorMessage: string | null;
  successMessage: string | null;
}
