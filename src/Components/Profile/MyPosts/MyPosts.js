import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
function MyPosts(props) {
    const postData = [
        {id: 1, post:"watcup",like:10},
        {id: 2, post:"hello , how are you",like:20},
        {id: 3, post:"hi it is my first message", like:30},
        {id: 4, post:"it is a good",like:40},
    ]


    return (
        <div className={s.myposts}>
           <h1 className={s.postsHeader}> my posts</h1>
            <div>
               <div>
                   <textarea name="new post" id="addPost" cols="30" rows="5" placeholder={'new post'}></textarea>
               </div>
                <div><button>Add Post</button></div>
            </div >

            <div className={s.posts}>
                {
                    postData.map(item=>(
                        <Post post={item.post} like={item.like} />
                    ))
                }
            </div>

        </div>
    );
}

export default MyPosts;
