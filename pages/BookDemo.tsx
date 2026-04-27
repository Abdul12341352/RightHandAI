import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookDemo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <button onClick={() => navigate('/')} className="mb-4 text-blue-600">← Back</button>
      <h1 className="text-2xl font-bold">Book a Demo</h1>
    </div>
  );
};
export default BookDemo;
