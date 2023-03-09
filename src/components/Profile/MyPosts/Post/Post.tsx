import classes from './Post.module.css'

type PostPropsType = any

export function Post(props: PostPropsType) {
    return (

                <div className={classes.item}>
                    <img src="https://www.slashfilm.com/img/gallery/how-avatar-became-the-most-popular-movie-no-one-remembers/l-intro-1658431618.jpg"/>
                    post1
                    <div>

                        <span>Like </span>
                        <span>Dislike</span>
                    </div>

                </div>

    )
}