import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostItemType} from "../Profile";
import {ActionTypes} from "../../../redux/store";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validator";
import {TextArea} from "../../FormsControls/FormControls";


type MyPostsPropsType = {
    posts: Array<PostItemType>
    addPost: (values: any) => void
    newPostText: string
    dispatch?: (action: ActionTypes) => void


};


export function MyPosts(props: MyPostsPropsType) {


    const addPostHandler = (values: any) => {

        props.addPost(values.newPostBody)
    }


    return (

        <div className={classes.postsBlock}>

            <div className={classes.posts}>
                {props.posts.map((el: PostItemType, index: number) => <Post key={index} content={el.content}
                                                                            countLikes={el.countLikes}
                                                                            countDislikes={el.countDislikes}/>)}

            </div>
            <div>
                <h1>My posts</h1>

                <AddNewPostFormRedux onSubmit={addPostHandler}/>
            </div>


        </div>
    )
}

type AddNewPostFormPropsType = {
    handleSubmit: any
}

const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm = (props: AddNewPostFormPropsType) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={TextArea} name='newPostBody' placeholder='Write post'
            validate={[required, maxLength10]}
            ></Field>

            <button>Add post</button>
            <button>Remove</button>
        </form>
    )


}

const AddNewPostFormRedux = reduxForm<any>({form: 'myPostsAddNewPost'})(AddNewPostForm)


