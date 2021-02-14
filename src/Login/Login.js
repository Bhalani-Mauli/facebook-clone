import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in...
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.jpg"
                    alt=""
                />
                <img
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-2019.jpg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In 
            </Button>
        </div>
    );
}

export default Login;