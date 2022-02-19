import React, { HTMLAttributes, ReactNode } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /** content of Badge component */
  children?: ReactNode;
}
export const Badge = ({ children }: BadgeProps): JSX.Element => {
  return (
    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
      {children}
    </span>
  );
};
