import React from 'react';

export function GlassPanel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`glass ${className}`.trim()}>{children}</section>;
}

