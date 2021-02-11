
export const createProfile = githubUserData => {
    return {
        github: {
            ...createGithubData(githubUserData)
        },
        challenges: {
            items: [],
            score: 0,
            ranking: 0,
            current_challenege: null
        },
        uid: githubUserData?.user?.uid || null,
        username: githubUserData?.additionalUserInfo?.username || null,
        name: githubUserData?.additionalUserInfo?.profile?.name || null,
        avatar: githubUserData?.additionalUserInfo?.profile?.avatar_url || null,
        isOnline: true,
        isAdmin: false
    }
}

export const updateProfile = (githubUserData, profile) => {
    profile.github = {
        ...createGithubData(githubUserData)
    };
    profile.isOnline = true;
    return profile;
}

export const createGithubData = githubUserData => {
    return {
        uid: githubUserData?.user?.providerData[0]?.uid || null,
        username: githubUserData?.additionalUserInfo?.username || null,
        bio: githubUserData?.additionalUserInfo?.profile?.bio || null,
        hirable: githubUserData?.additionalUserInfo?.profile?.hirable || null,
        name: githubUserData?.additionalUserInfo?.profile?.name || null,
        email: githubUserData?.additionalUserInfo?.profile?.email || null,
        api_url: githubUserData?.additionalUserInfo?.profile?.url || null,
        profile_url: githubUserData?.additionalUserInfo?.profile?.html_url || null,
        repos_url: githubUserData?.additionalUserInfo?.profile?.repos_url || null,
        avatar_url: githubUserData?.additionalUserInfo?.profile?.avatar_url || null,
        followers: githubUserData?.additionalUserInfo?.profile?.followers || null,
    }
}