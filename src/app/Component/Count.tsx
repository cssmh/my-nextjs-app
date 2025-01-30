"use client";

import { useState } from "react";

const Count: React.FC = () => {
  const [num, setNum] = useState<number>(0);

  const handleDecrease = () => {
    if (num > 0) {
      setNum((prev) => prev - 1);
    }
  };

  return (
    <div className="my-10 text-center">
      <button
        onClick={() => setNum((prev) => prev + 1)}
        className="mr-2 btn btn-primary"
      >
        Increase +
      </button>
      {num}
      <button onClick={handleDecrease} className="ml-2 btn btn-primary">
        Decrease -
      </button>
    </div>
  );
};

export default Count;
