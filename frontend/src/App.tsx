import { useState } from "react";
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)} className="bg-blue-300">
        text: {count}
      </Button>
    </div>
  );
}

export default App;
