import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostItemType} from "../Profile";

type MyPostsPropsType = {
    posts: Array<PostItemType>
};

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
                {props.posts.map((el: PostItemType, index: number) => <Post key={index} content={el.content} countLikes={el.countLikes}
                                            countDislikes={el.countDislikes}/>)}

            </div>
        </div>
    )
}