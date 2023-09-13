import React from "react";

export const getUsers = (state: any) => {
return state.users.users
}

export const getCurrentPage = (state: any) => {
return state.users.currentPage
}
export const getPageSize = (state: any) => {
return state.users.pageSize
}

export const getTotalUsersCount = (state: any) => {
return state.users.totalUsersCount
}

export const getIsFetching = (state: any) => {
return state.users.isFetching
}

export const getFollowingInProgress = (state: any) => {
return state.users.followingInProgress
}