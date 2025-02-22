import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToMainClick = () => {
    navigate('/');
  };

  return (
    <div className="coming-soon">
      <h2>MyBete App Coming Soon</h2>
      <button onClick={handleBackToMainClick}>Back to Main</button>
    </div>
  );
}

export default ComingSoon;
