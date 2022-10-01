import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


const dialogObj = [
    {name:"Regina",id:1},
    {name:"Razmik",id:2},
    {name:"Yegor",id:3},
    {name:"Arman",id:4},
    {name:"Xachatur",id:5},
    {name:"Hamlet",id:6},
]

const messageData = [
    { id:1,message:"whatsup",},
    { id:2,message:"it's ok bro",},
    { id:3,message:"what are you going to do today ",},
    { id:4,message:"nothing interesting, just sitting at home and watch netflix all night",},
]

const postData = [
    {id: 1, post:"watcup",like:10},
    {id: 2, post:"hello , how are you",like:20},
    {id: 3, post:"hi it is my first message", like:30},
    {id: 4, post:"it is a good",like:40},
    {id: 4, post:"Hi I'm Arman and I'm fullStek developer",like:50},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>
    <App   dialogObj={dialogObj}  messageData={messageData}  postData={postData}/>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
