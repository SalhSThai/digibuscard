"use client";
import React from "react";
interface props {
  color?: string;
  size?: string;
  className?: string;
}
function UserCircle({ className = "", size = "32px", color = "black" }: props) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg width={`${size}`} height={`${size}`} viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={`${color}`}
          d="M258 175q-50 0 -92 24.5t-66.5 66.5t-24.5 92v484q0 50 24.5 92t66.5 66.5t92 24.5h484q50 0 92 -24.5t66.5 -66.5t24.5 -92v-484q0 -50 -24.5 -92t-66.5 -66.5t-92 -24.5h-484zM221 301q116 0 222.5 44.5t188.5 126t126 188.5t44 222h-116q0 -92 -35.5 -177.5t-101 -151
t-150.5 -101t-178 -35.5v-116zM221 497q77 0 147.5 29.5t125 83.5t83.5 125t29 147h-113q0 -53 -21 -103.5t-58.5 -88.5t-88 -59t-104.5 -21v-113zM299 723h1h1q33 0 56 23.5t23 56.5t-23 56t-56 23t-56.5 -23t-23.5 -56t22.5 -56t55.5 -24z"
        />
      </svg>
    </div>
  );
}

export default UserCircle;
