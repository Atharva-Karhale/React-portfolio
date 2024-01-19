import React, { useState } from 'react';
import Pattern from './Test';

const Test2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ position: 'relative' }} onMouseMove={handleMouseMove}>
      <Pattern numberOfNodes={4} />
      <img
        src="src/Assets/1x/Logo.png"
        alt="Moving Image"
        style={{
          position: 'absolute',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '50px', 
          height: '50px', 
        }}
      />
    </div>
  );
};

export default Test2;
