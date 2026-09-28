import React from 'react';

export interface AlertProps {
  type: 'error' | 'success';
  message: string;
}

export const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const alertClass = type === 'error' ? 'alert-error' : 'alert-success';
  const role = type === 'error' ? 'alert' : 'status';

  return (
    <div className={alertClass} role={role}>
      {message}
    </div>
  );
};
