import React from 'react';
import avatar from "./img/programmer-flat-color-icon-vector-38028025.jpg"
import s from "./Post.module.css"
function   Post(props) {
    console.log("sssssssssss")
    console.log(s)
    return (
        <>
            <div className={s.post}>
                <div className={s.postAva}><img src={avatar} className={s.imgAvatar} alt="avatar"/></div>
                <div className={s.postText}><p className={s.span}>{props.post}</p></div>
            </div>
            <div className={s.block}>
                <button >like <span>"{props.like}"</span> </button>
            </div>
        </>
    );
}

export default Post;