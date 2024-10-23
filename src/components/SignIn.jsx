import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
    const dispatch = useDispatch();
    const authStatus = useSelector(state => state.authReducer)
    console.log(authStatus)
    return (
        <div>
            <h1>SignIn page</h1>
            <p>Please click below button to sign in</p>
            {!authStatus ? <button onClick={() => dispatch({ type: "login" })}>Sign In</button> :
                <button onClick={() => dispatch({ type: "logout" })}>Sign Out</button>}
        </div>
    )
}

export default SignIn