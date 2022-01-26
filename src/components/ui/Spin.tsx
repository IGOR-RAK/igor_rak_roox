import React from 'react';







const Spin:React.FC =()=> {
  return (
    <div style={{width:"100px", height:"100px",border:"3px dashed lightgrey", borderRadius:"50%", animation: "mymove 5s infinite", margin:"0 auto"}}></div>
  );
}

export  {Spin};