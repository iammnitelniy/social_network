import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsPropsType = any;
type PostItemType= {
    id: number
    content: string
    countLikes: number
    countDislikes: number
}

export function MyPosts(props: MyPostsPropsType) {
    let postData: Array<PostItemType> = [
        {
            id: 1,
            content: "bow",
            countLikes: 12,
            countDislikes: 9
        },
        {
            id: 2,
            content: "wow",
            countLikes: 5,
            countDislikes: 1
        },
        {
            id: 3,
            content: "get",
            countLikes: 7,
            countDislikes: 3
        },
        {
            id: 4,
            content: "down",
            countLikes: 9,
            countDislikes: 0
        }



    ]
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
                {postData.map((el, index) => <Post key={index} content={el.content} countLikes={el.countLikes}
                                            countDislikes={el.countDislikes}/>)}

            </div>
        </div>
    )
}