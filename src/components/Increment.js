import { useState } from "react";

const IncrementCount = () => {
  const [count, setCount] = useState(0);
  setCount = count++;
};

export default IncrementCount;
