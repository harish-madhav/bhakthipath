const initialState = {
    songs: [],
    pendingSongs: [],
};

export default function songReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SONGS':
            return { ...state, songs: action.payload };
        case 'SET_PENDING_SONGS':
            return { ...state, pendingSongs: action.payload };
        default:
            return state;
    }
}
