import React from "react";

export default function Friend({ name, age, email }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </>
  );
}
