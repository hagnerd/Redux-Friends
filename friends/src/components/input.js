import React from "react";

export default function Input(props) {
  return (
    <input
      className="py-1 px-3 border-2 border-gray-700 text-gray-800 rounded"
      {...props}
    />
  );
}
