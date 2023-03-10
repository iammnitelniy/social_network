import classes from './Post.module.css'

type PostPropsType = {
    content: string,
    countLikes: number;
    countDislikes: number;
}


export function Post(props: PostPropsType) {
    return (

        <div className={classes.item}>
            <img
                src="https://www.slashfilm.com/img/gallery/how-avatar-became-the-most-popular-movie-no-one-remembers/l-intro-1658431618.jpg"/>
            post1
            <div>
                {props.content}
                <span> {props.countLikes} Likes </span>
                <span>{props.countDislikes} Dislikes</span>
            </div>

        </div>

    )
}