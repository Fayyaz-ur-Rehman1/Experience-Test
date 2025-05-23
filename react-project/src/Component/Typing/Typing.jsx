// Q17. Create a React component that shows an input field and displays the typed value below in real time.

import React, { useState } from 'react';
import '../Typing/Typing.css'; 

export const Typing = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="typing-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="typing-input"
        placeholder="Type something..."
      />
      <p className="typing-output">You typed: {inputValue}</p>
    </div>
  );
};
