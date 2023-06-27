import React from 'react';
import styles from './Users.module.css'
import axios from "axios";



export const Users = (props: any) => {

        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0')
        }





const onClickUnfollowHandler = (id: number) => {
    props.unfollow(id)
}
const onClickFollowHandler = (id: number) => {
    props.follow(id)
}



    return (
        <div>
            {props.users.map((u: any)=><div key={u.id}>


                        {u.followed ? <button onClick={()=>onClickUnfollowHandler(u.id)}>Unfollow</button> : <button onClick={()=>onClickFollowHandler(u.id)}>Follow</button>}
                        <img src={u.photoUrl} className={styles.userPhoto}/>



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

