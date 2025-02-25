import React from "react";

const SecondCounter = ({seconds}) => {
    const one = Math.floor(seconds / 1) % 10;
    const two = Math.floor(seconds / 10) % 10;
    const three = Math.floor(seconds / 100) % 10;
    const four = Math.floor(seconds / 1000) % 10;
    const five = Math.floor(seconds / 10000) % 10;
    const six = Math.floor(seconds / 100000) % 10;

return (
    <div className="d-flex flex-row justify-content-center align-items-center bg-dark text-white gap-2" style={{height:"100vh", fontSize:"2em"}}>
       <div><i className="far fa-clock d-flex align-items-center justify-content-center rounded-2" style={{fontSize:"3em", backgroundColor:"#383f47", height:"15vh", width:"10vh"}}></i></div>
       <div className="d-flex align-items-center justify-content-center rounded-2" style={{fontSize:"3em", backgroundColor:"#383f47", height:"15vh", width:"10vh"}}>{six}</div>
       <div className="d-flex align-items-center justify-content-center rounded-2" style={{fontSize:"3em", backgroundColor:"#383f47", height:"15vh", width:"10vh"}}>{five}</div>
       <div className="d-flex align-items-center justify-content-center rounded-2" style={{fontSize:"3em", backgroundColor:"#383f47", height:"15vh", width:"10vh"}}>{four}</div>
       <div className="d-flex align-items-center justify-content-center rounded-2" style={{fontSize:"3em", backgroundColor:"#383f47", height:"15vh", width:"10vh"}}>{three}</div>
       <div className="d-flex align-items-center justify-content-center rounded-2" style={{fontSize:"3em", backgroundColor:"#383f47", height:"15vh", width:"10vh"}}>{two}</div>
       <div className="d-flex align-items-center justify-content-center rounded-2" style={{fontSize:"3em", backgroundColor:"#383f47", height:"15vh", width:"10vh"}}>{one}</div>
    </div>
    );
};

export default SecondCounter;