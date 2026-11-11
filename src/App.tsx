import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hei fra Butlr</h1>
      <p>Dette er en boilerplate for en hjemmeside.</p>
      <p>Antall klikk: {count}</p>
      <button onClick={() => setCount(count + 1)}>Klikk meg</button>
    </div>
  );
};

export default App;