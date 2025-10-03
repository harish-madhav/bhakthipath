import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const login = (email, password) => async dispatch => {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Only store serializable user info
        const userInfo = {
            email: user.email,
            uid: user.uid,
            displayName: user.displayName || '',
        };
        const isAdmin = user.email === 'admin@gmail.com';
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user: userInfo, isAdmin } });
        // If admin, navigate client-side by route guard to /admin
    } catch (error) {
        // handle error
    }
};

export const logout = () => async dispatch => {
    const auth = getAuth();
    await signOut(auth);
    dispatch({ type: 'LOGOUT' });
};
