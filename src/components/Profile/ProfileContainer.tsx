import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getUserProfileTC, SetUserProfileAC, SetUserProfileACType} from '../../redux/profileReducer';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {usersAPI} from "../../api/usersAPI";
import {profileAPI} from "../../api/ProfileAPI";
import {Dispatch} from "redux";

interface State {
}

export type ProfileFromAPIType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
        mainLink: string;
        photos: object;
        small: string;
    };
    photos: {
        small: string;
        large: string;
    };
};

type ProfileContainerProps = RouteComponentProps<{ userId: string }> & PropsFromRedux;

class ProfileContainer extends React.Component<ProfileContainerProps, State> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
});

const mapDispatchToProps = (dispatch: any) => ({
    getUserProfileTC: (userId: string) => {
        dispatch(getUserProfileTC(userId));
    },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(withRouter(ProfileContainer));