import React from 'react';
import styles from './Users.module.css'



export const Users = (props: any) => {

        if (props.users.length === 0)
    props.setUsers(
        [{id: 1, photoUrl: 'https://pop.inquirer.net/files/2021/05/gigachad.jpg', followed: false, fullName: 'Dmitriy', status: 'top', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://pop.inquirer.net/files/2021/05/gigachad.jpg', followed: true, fullName: 'Dmitriy', status: 'top2', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photoUrl: 'https://pop.inquirer.net/files/2021/05/gigachad.jpg', followed: false, fullName: 'Dmitriy', status: 'top3', location: {city: 'Kiev', country: 'Ukraine'}}])




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

