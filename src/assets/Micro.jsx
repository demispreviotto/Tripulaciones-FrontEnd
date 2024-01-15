import React from "react";

const Micro = ({ width, height, fill }) => {
  return (
    <svg
      width={width || "17"}
      height={height || "22"}
      viewBox="0 0 17 22"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
        <path
          id="Stroke 7"
          d="M9.78809 5.93755H11.9405"
          stroke="#AC1A2F"
          stroke-width="1.5"
          stroke-linecap="square"
        />
        <path
          id="Stroke 9"
          d="M8.70801 9.54839H11.9428"
          stroke="#AC1A2F"
          stroke-width="1.5"
          stroke-linecap="square"
        />
        <path
          id="Stroke 1"
          d="M8.24805 20.6035V17.8321"
          stroke="#AC1A2F"
          stroke-width="1.5"
          stroke-linecap="square"
        />
        <path
          id="Stroke 3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.24821 14.2018C6.20745 14.2018 4.55273 12.5404 4.55273 10.4901V5.31615C4.55273 3.26592 6.20745 1.60352 8.24821 1.60352C10.2899 1.60352 11.9437 3.26592 11.9437 5.31615V10.4901C11.9437 12.5404 10.2899 14.2018 8.24821 14.2018Z"
          fill="#AC1A2F"
          stroke="#AC1A2F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 5"
          d="M15.5277 10.5197C15.5277 14.5579 12.2697 17.832 8.2492 17.832C4.22965 17.832 0.97168 14.5579 0.97168 10.5197"
          stroke="#AC1A2F"
          stroke-width="1.5"
          stroke-linecap="square"
        />
    </svg>
  );
};

export default Micro;
