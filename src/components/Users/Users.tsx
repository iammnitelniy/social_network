import React from 'react';
import styles from './users.module.css'

export type UserPropsType = {
        users: any
}

export const Users = (props: UserPropsType) => {


const onClickUnfollowHandler = (id: number) => {
    props.unfollow(id)
}
const onClickFollowHandler = (id: number) => {
    props.follow(id)
}



    return (
        <div>
            {props.users.map((u: any)=><div key={u.id}>
                <span>
                    <div>
                        {u.followed ? <button onClick={()=>onClickUnfollowHandler(u.id)}>Unfollow</button> : <button onClick={()=>onClickFollowHandler(u.id)}>Follow</button>}
                        <img src={u.photoUrl} className={styles.userPhoto}/>

                    </div>

                    <div>
                        <button>Follow</button>

                    </div>


                </span>

                <span>
                    <span>
                        <div>u.fullName</div>
                        <div>u.status</div>

                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>

                    </span>




                </span>




            </div>)}
        </div>
    );
};

