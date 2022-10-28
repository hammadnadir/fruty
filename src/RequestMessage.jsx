import React from "react";

function RequestMessage({ icon = "M4.5 12.75l6 6 9-13.5", message }) {
  return (
    <div className="flex items-center z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={icon}
        />
      </svg>&nbsp;&nbsp;&nbsp;
      {message}
    </div>
  );
}

export default RequestMessage;