import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostItemType} from "../Profile";
import {useRef} from "react";

type MyPostsPropsType = {
    posts: Array<PostItemType>
    addPost: any
    newPostText: string
    updateNewPostText: (newPost:string)=> void

};

export function MyPosts(props: MyPostsPropsType) {

    let newPostElement:any = React.createRef()

    const addPostHandler = (e:any) => {

        let text

        if (newPostElement.current !== null) {
            text = newPostElement.current.value
        }
        props.addPost(text)
        newPostElement.current.value=("")

    }

    let onPostChange = () => {
        const text = newPostElement.current.value
        console.log(text)
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>

                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    </div>
                    <button onClick={addPostHandler}>Add post</button>
                    <button>Remove</button>

                </div>
            </div>

            <div className={classes.posts}>
                {props.posts.map((el: PostItemType, index: number) => <Post key={index} content={el.content} countLikes={el.countLikes}
                                            countDislikes={el.countDislikes}/>)}

            </div>
        </div>
    )
}