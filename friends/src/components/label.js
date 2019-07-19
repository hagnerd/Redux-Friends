import React from "react";

export default function Label({ children, color="text-white", ...rest }) {
  return (
    <label className={`font-semibold ${color}`} {...rest}>
      {children}
    </label>
  );
}
