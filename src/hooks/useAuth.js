import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/userSlice";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userSlice = useSelector(state => state.userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        loadUserData();
    }, [])

    useEffect(() => {
        checkAuth();
    }, [userSlice])

    const loadUserData = async () => {
        if (checkAuth()) {
            // Setting dummy data is the user logged in, the real user data should be pulled from the backend
            dispatch(setUser({username: 'admin'}));
        }
    }

    const checkAuth = () => {
        let token = sessionStorage.getItem('token');
        let loggedInStatus = false;

        if ((token && token.length > 0)) {
            // Token validation should be done here
            setIsLoggedIn(true);
            loggedInStatus = true;
        } else {
            setIsLoggedIn(false);
        }

        return loggedInStatus;
    }

    const logOut = async () => {
        dispatch(setUser({user: null}));
        sessionStorage.removeItem('token');
    }

    const login = async (username, password) => {
        // Setting dummy details
        const requestObject = {username, password};
        const processResponse = () => {
            if (requestObject.username === 'admin' && requestObject.password === 'admin') {
                // setting dummy token
                // This response should be processed from the backend
                return {token: username + "_" + password, username: username}
            } else {
                return {message: 'Login Failed! Please check username and password!', error: true};
            }
        };

        let response = processResponse();

        if (response.error) {
            console.log('Processing failed!', response.message);
            sessionStorage.clear();

            return response.message;
        } else {
            dispatch(setUser(response));
            sessionStorage.setItem('token', response.token);
        }
    }

    return {isLoggedIn, logOut, login, user: userSlice.user};
}

export default useAuth;