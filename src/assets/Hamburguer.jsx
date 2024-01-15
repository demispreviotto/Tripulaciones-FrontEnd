import React from 'react'

const Hamburguer = ({ height, width, fill }) => {
    return (
        <svg stroke="currentColor"
            fill={fill || "currentColor"}
            strokeWidth="0"
            viewBox="0 0 26 26"
            aria-hidden="true"
            height={height || "26px"}
            width={width || "26px"}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z">
            </path>
        </svg >
    )
}

export default Hamburguer