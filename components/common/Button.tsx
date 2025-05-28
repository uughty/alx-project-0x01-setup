import React from 'react';

const Button: React.FC<{ title: string }> = ({ title }) => {
  return <button className="bg-blue-500 text-white px-4 py-2 rounded">{title}</button>;
};

export default Button;
