import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {SetUserProfileAC, SetUserProfileACType} from "../../redux/profileReducer";
import {Dispatch} from "redux";


 interface State {
 }

export type ProfileFromAPIType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
        photos: object
        small: string
    }
    photos: {
        small: string
        large: string
    }

}


 class ProfileContainer extends  React.Component<ProfileContainerProps, State>{

     componentDidMount() {
         axios.get('https://social-network.samuraijs.com/api/1.0/profile/121')
             .then(response => {
                   this.props.SetUserProfile(response.data)
             })
     }


     render() {
        return (
            <div>

              <Profile profile={this.props.profile}/>

            </div>

        )
    }
}

let mapStateToProps = (state: AppStateType) => ({

    profile: state.profilePage.profile
})

let mapDispatchToProps = (dispatch: Dispatch) => ( {
    SetUserProfile: (profile: ProfileFromAPIType) => {
        dispatch(SetUserProfileAC(profile))
    }
} )




const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type ProfileContainerProps = PropsFromRedux;

export default connector(ProfileContainer);




