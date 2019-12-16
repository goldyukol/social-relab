import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux'



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.myUserId
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    render() {

        return <div>
            <Profile {...this.props} />
        </div >
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)