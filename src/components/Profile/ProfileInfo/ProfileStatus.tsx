import React, {ChangeEvent} from 'react';

interface State {
}
type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: any
};

class ProfileStatus extends React.Component<ProfileStatusPropsType, State>{




    state = {
        editMode: false,
        status: this.props.status
    }


    activateToggleEditMode = () =>  {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateProfileStatus(this.state.status)
        this.state.editMode =
        !this.state.editMode



    }
    onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {
    return  (
        <>

            {
                !this.state.editMode &&
            <div>
                <span  onDoubleClick={this.activateToggleEditMode}> {this.props.status || "No status"}</span>

            </div>
            }

            {this.state.editMode &&

            <div>

                <input onChange={this.onChangeCallback} autoFocus={true} onBlur={this.activateToggleEditMode} value={this.state.status}/>


            </div>
            }
        </>
    );
}
}

export default ProfileStatus