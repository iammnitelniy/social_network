import React from 'react';
import Preloader from "../../Preloader/Preloader";


type ProfileStatusPropsType = {
    status: string
};

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    return  (
        <>
            <div>
                <input value={props.status}/>

            </div>
            <div>



            </div>
        
        </>
    );
};