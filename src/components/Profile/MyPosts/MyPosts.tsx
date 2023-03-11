import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsPropsType = any;

export function MyPosts(props: MyPostsPropsType) {
    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>

                    <textarea></textarea>
                    </div>
                    <button>Add post</button>
                    <button>Remove</button>

                </div>
            </div>

            <div className={classes.posts}>

                <Post content={"bow"} countLikes={12} countDislikes={0}/>
                <Post content={"wow"} countLikes={16} countDislikes={7}/>
                <Post content={"get"} countLikes={2} countDislikes={5}/>
                <Post content={"down"} countLikes={9} countDislikes={3}/>


            </div>
        </div>
    )
}