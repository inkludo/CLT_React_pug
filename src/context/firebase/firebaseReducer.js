import { SHOW_LOADER, FETCH_DATA } from "../types"

const handlers = {
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
    [FETCH_DATA]: (state, { payload }) => ({ ...state, data: payload, loading: false }),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}