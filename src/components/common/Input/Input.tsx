import React, { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  actionIcon?: ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  icon,
  actionIcon,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="field">
      {icon}
      <div className="inner">
        <label htmlFor={id}>{label}</label>
        <input id={id} className={className} {...props} />
      </div>
      {actionIcon}
    </div>
  );
};
