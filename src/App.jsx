import React, { useState } from 'react';
const App = () => {
  // khu vuc cua javascript

  const [number, setNumber] = useState(10);

  const handleAdd = () => {
    setNumber(number + 1);
  };

  return (

    <div>
      <h1>Number: {number}</h1>
<button onClick={handleAdd}>Add</button>    
  </div>
  );
};

export default App;
