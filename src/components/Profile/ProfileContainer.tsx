import React from 'react';
import {Profile} from "./Profile";


 interface State {
 }
 interface ProfileContainerProps {
 }



 class ProfileContainer extends  React.Component<ProfileContainerProps, State>{
    render() {
        return (
            <div>

              <Profile />

            </div>

        )
    }
}

export default ProfileContainer


