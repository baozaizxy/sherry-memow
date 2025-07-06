import React from 'react';

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-8">
      {children}
    </div>
  );
}