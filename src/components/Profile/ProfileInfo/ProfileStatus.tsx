import React from 'react';

interface State {
}
type ProfileStatusPropsType = {
    status: string
};

class ProfileStatus extends React.Component<ProfileStatusPropsType, State>{


    state = {
        editMode: false
    }


    activateToggleEditMode = () =>  {
        this.setState({
            editMode: !this.state.editMode
        })
        this.state.editMode =
        !this.state.editMode

    }


    render() {
    return  (
        <>

            {
                !this.state.editMode &&
            <div>
                <span  onDoubleClick={this.activateToggleEditMode}> {this.props.status}</span>

            </div>
            }

            {this.state.editMode &&
            <div>

                <input autoFocus={true} onBlur={this.activateToggleEditMode} value={this.props.status}/>


            </div>
            }
        </>
    );
}
}

export default ProfileStatus