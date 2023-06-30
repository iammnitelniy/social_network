import React, {useEffect} from 'react';
import styles from './Users.module.css'
import axios from "axios";



export const Users = (props: any) => {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items)
                console.log(res.data.items)
            })

    }, [])


        // if (props.users?.length === 0) {
        //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
        //         .then(res => {
        //         props.setUsers(res.data.items)
        //     })
        // }





const onClickUnfollowHandler = (id: number) => {
    props.unfollow(id)
}
const onClickFollowHandler = (id: number) => {
    props.follow(id)
}



    return (
        <div>
            Users:
            {props.users?.items[0].name}





            {props.users?.map((u: any)=><div key={u.id}>


                        <button onClick={()=>onClickUnfollowHandler(u.id)}>Unfollow</button> <button onClick={()=>onClickFollowHandler(u.id)}>Follow</button>
                        <img src={u.photos.small != null ? u.photos.small : "https://img.freepik.com/free-icon/user_318-159711.jpg"} className={styles.userPhoto}/>



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

