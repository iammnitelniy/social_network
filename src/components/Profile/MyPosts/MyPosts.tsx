import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostItemType} from "../Profile";
import {useRef} from "react";
import {MouseEvent} from "react";
import {
    ActionTypes, addPostActionCreator,
    AddPostActionType,
    ChangeNewTextActionType,
    updateNewPostTextActionCreator
} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostItemType>
    addPost?: any
    newPostText: string
    updateNewPostText?: (newPost:string)=> void
    dispatch: (action: ActionTypes)=> void


};



export function MyPosts(props: MyPostsPropsType) {

    let newPostElement:any = React.createRef()

    const addPostHandler = (e:MouseEvent<HTMLButtonElement>) => {

        let text
        if (newPostElement.current !== null) {
            text = newPostElement.current.value
        }
        let action = addPostActionCreator(text)
        props.dispatch(action)
        newPostElement.current.value=("")

    }

    let onPostChange = () => {
        const newText = newPostElement.current.value
        let action = updateNewPostTextActionCreator(newText)
        props.dispatch(action)
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