/**
 * Validates corporate email format.
 */
export const isValidCorporateEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Sanitizes input text to prevent basic XSS or malicious payload strings.
 */
export const sanitizeInput = (text: string): string => {
  return text.replace(/[<>]/g, '').trim();
};
