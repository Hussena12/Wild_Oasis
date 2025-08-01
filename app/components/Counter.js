"use client";
import React, { useState } from "react";

const Counter = ({ res }) => {
  const [count, setCount] = useState(0);
  console.log(res);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> {count}</button>
    </div>
  );
};

export default Counter;
