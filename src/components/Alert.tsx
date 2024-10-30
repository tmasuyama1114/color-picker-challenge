import React from 'react'

type AlertProps = {
  children: React.ReactNode
  className?: string
}

export const Alert: React.FC<AlertProps> = ({ children, className = '' }) => (
  <div className={`rounded-md p-2 text-sm ${className}`}>{children}</div>
)
