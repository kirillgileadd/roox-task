import * as UserActionCreators from './user'
import * as UserProfileActionCreators from './userProfile'

export default {
    ...UserActionCreators,
    ...UserProfileActionCreators
}