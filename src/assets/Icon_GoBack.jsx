import React from "react";
import { useNavigate } from "react-router-dom";

const Icon_GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="28"
      viewBox="0 0 16 28"
      fill="none"
      onClick={handleGoBack}
    >
      <path
        d="M14 26L2 14.001L14 2"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default Icon_GoBack;
