import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getProfileStatusTC, getUserProfileTC, updateProfileStatusTC} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {Dialogs} from "../Dialogs/Dialogs";






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

// type ProfileContainerProps = RouteComponentProps<{ userId: string }> & PropsFromRedux;

class ProfileContainer extends React.Component<any, State> {


    componentDidMount() {


        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
         this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)


    }


    render() {


        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.statusFromServer}
                         updateProfileStatus={this.props.updateProfileStatus}

                />
            </div>
        );
    }
}


const mapStateToProps = (state: any) => {

    console.log(state.profilePage.status)
    return (
        {
            auth: state.auth.isAuth,
            profile: state.profilePage.profile,
            statusFromServer: state.profilePage.status,
            authorizedUserId: state.auth.userId,
            isAuth: state.auth.isAuth


        }

    )
}
//update

const mapDispatchToProps = (dispatch: any) => ({
    getUserProfile: (userId: string) => {
        dispatch(getUserProfileTC(userId));
    },
    getProfileStatus: (userId: string) => {
        dispatch(getProfileStatusTC(userId));
    },
    updateProfileStatus: (status: string) => {
        dispatch(updateProfileStatusTC(status));
    },
});


//export default  compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withRouter)(ProfileContainer)

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);

//boom
//update

// const connector = connect(mapStateToProps, mapDispatchToProps);
//
// type PropsFromRedux = ConnectedProps<typeof connector>;
//
// export default connector(withRouter(WithAuthRedirect(ProfileContainer)));