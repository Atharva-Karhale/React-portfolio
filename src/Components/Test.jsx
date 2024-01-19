//import React from 'react';
//import { useState } from 'react';
//
//export default function Test1() {
//  //const [isHovered, setHovered] = useState(false);
////
//  //const mouseEntered = () => {
//  //  setHovered(true);
//  //};
////
//  //const mouseLeft = () => {
//  //  setHovered(false);
//  //};
//
//  return (
//    <div className=' w-8 h-8 bg-black rounded-full'>
//
//    </div>
//  );
//}




//
//
//
//
//import React from 'react';
//
//const Shape = () => (
//  <div className='w-8 h-8 bg-black rounded-full'></div>
//);
//
//const Pattern = () => (
//  <div style={{ display: 'flex', alignItems: 'center' }}>
//    <Shape />
//    <div
//      style={{
//        width: '50px', // Adjust the width of the line as needed
//        height: '2px', // Adjust the height of the line as needed
//        background: 'black',
//        margin: '0 10px', // Adjust the margin between shapes and line as needed
//      }}
//    ></div>
//    <Shape />
//    <div
//      style={{
//        width: '50px', // Adjust the width of the line as needed
//        height: '2px', // Adjust the height of the line as needed
//        background: 'black',
//        margin: '0 10px', // Adjust the margin between shapes and line as needed
//      }}
//    ></div>
//    <Shape />
//    <div
//      style={{
//        width: '500px', // Adjust the width of the line as needed
//        height: '2px', // Adjust the height of the line as needed
//        background: 'black',
//        margin: '0 10px', // Adjust the margin between shapes and line as needed
//      }}
//    ></div>
//    <Shape />
//  </div>
//);
//
//export default Pattern;
//
//




import React from 'react';

const Shape = () => (
  <div className='w-8 h-8 bg-black rounded-full'>fsd</div>
);

const Pattern = ({ numberOfNodes }) => {
  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < numberOfNodes - 1; i++) {
      lines.push(
        <div
          key={i}
          style={{
            width: '50px', // Adjust the width of the line as needed
            height: '2px', // Adjust the height of the line as needed
            background: 'black',
            margin: '0 10px', // Adjust the margin between shapes and line as needed
          }}
        ></div>
      );
    }
    return lines;
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[...Array(numberOfNodes)].map((_, index) => (
        <React.Fragment key={index}>
          <Shape />
          {index < numberOfNodes - 1 && renderLines()[index]}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Pattern;
