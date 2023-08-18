import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfileTC, updateProfileStatusTC} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";




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
            userId = "2"
        }
         this.props.getUserProfileTC(userId)

        this.props.setProfileStatusTC(userId)
        this.props.updateProfileStatusTC(this.props.status)

    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        );
    }
}


const mapStateToProps = (state: any) => ({
    auth: state.auth.isAuth,
    profile:state.profilePage.profile,
    status: state.profilePage.status


});

const mapDispatchToProps = (dispatch: any) => ({
    getUserProfileTC: (userId: string) => {
        dispatch(getUserProfileTC(userId));
    },
    setProfileStatusTC: (userId: string) => {
        dispatch(getUserProfileTC(userId));
    },
    updateProfileStatusTC: (status: string) => {
        dispatch(updateProfileStatusTC(status));
    },
});


export default  compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withRouter)(ProfileContainer)

// const connector = connect(mapStateToProps, mapDispatchToProps);
//
// type PropsFromRedux = ConnectedProps<typeof connector>;
//
// export default connector(withRouter(WithAuthRedirect(ProfileContainer)));