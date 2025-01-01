"use client";

import { useState } from "react";

const Count = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="my-10 text-center">
      <button onClick={() => setNum(num + 1)} className="mr-2 btn btn-primary">
        Increase +
      </button>
      {num}
      <button onClick={() => setNum(num - 1)} className="ml-2 btn btn-primary">
        Decrease -
      </button>
    </div>
  );
};

export default Count;
