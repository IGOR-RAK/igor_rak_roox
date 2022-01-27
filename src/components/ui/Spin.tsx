import React from 'react';

//Inline styles как исключение

const Spin:React.FC =()=> {
  return (
    <div style={{width:"100px", height:"100px",border:"3px dashed lightgrey", borderRadius:"50%", animation: "spin 5s infinite", margin:"0 auto"}}></div>
  );
}

export  {Spin};