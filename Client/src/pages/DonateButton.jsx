import React from 'react';
import { FiGift } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function DonateButton() {
  const navigate = useNavigate();

  const goToDonatePage = () => {
    navigate('/payment'); // make sure path matches App.jsx
  };

  return (
    <button
      onClick={goToDonatePage}
      className="flex items-center bg-amber-600 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
    >
      <FiGift className="mr-2" /> Donate
    </button>
  )
}

export default DonateButton;
