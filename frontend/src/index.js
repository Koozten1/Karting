import React from 'react';
import * as ReactDOMClient from "react-dom/client"
import App  from './App';
import './css/main.css'

// const inputClick = () => console.log("Clicked")
// const mouseOver = () => console.log("moved")

// const helpText = "Help text"

// const elements = (<div className='name'>
//   <h1>{helpText}</h1>
//   {/* <input placeholder={helpText}
//     onClick={inputClick} onMouseEnter={mouseOver}
//   />
//   <p>{helpText === "Help text!" ? "Yes" : "No"}</p> */}
// </div>)
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const app = document.getElementById("app");

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App/>)