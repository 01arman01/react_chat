import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

let DialogItem = (props)=>{
    let path =`/dialogs/${props.id}`
    return(

        <div className={s.dialog+" "+s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}
const Message =(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

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



function Dialogs(props) {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogs_items}>
               {dialogObj.map(item=>(
                   <>
                       <DialogItem name={item.name} id={item.id}/>
                   </>

               ))}
`
           </div>
           <div className={s.messages}>
               {/*<Message message="hi"Z/>*/}
               {/*<Message message="How are you"/>*/}
               {/*<Message message="i'm fine thanks"/>*/}
               {
                   messageData.map(item=>(
                       <Message message={item.message}/>
                   ))
               }
           </div>
        </div>
    );
}

export default Dialogs;