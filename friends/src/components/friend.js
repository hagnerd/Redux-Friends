import React from "react";

function Text({ label, value }) {
  return (
    <p className="text-lg text-gray-600">
      {label}: <span className="font-semibold text-gray-900">{value}</span>
    </p>
  );
}

export default function Friend({ name, age, email }) {
  return (
    <>
      <Text label="Name" value={name} />
      <Text label="Age" value={age} />
      <Text label="Email" value={email} />
    </>
  );
}
