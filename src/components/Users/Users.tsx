import React from 'react';

export type UserPropsType = {
        users: any
}

export const Users = (props: UserPropsType) => {
    return (
        <div>
            {props.users.map(u=><div key={u.id}>
                <span>
                    <div>

                        <img />

                    </div>

                    <div>
                        <button>Follow</button>

                    </div>


                </span>



            </div>)}
        </div>
    );
};

