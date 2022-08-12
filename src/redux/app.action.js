
export const loadPostStart = () => ({
    type: 'LOAD_POST_START',
})

export const loadPostSuccess = (posts) => ({
    type: 'LOAD_POST_SUCCESS',
    payload: posts
})

export const loadPostFail = (error) => ({
    type: 'LOAD_POST_FAIL',
    payload: error
})