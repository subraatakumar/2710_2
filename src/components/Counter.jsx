import React, { useReducer } from 'react'
import { inc, dec, reset } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const counter = useSelector(state => state.counterReducer)
    const loginStatus = useSelector(state => state.authReducer)
    console.log(loginStatus)
    const dispatch = useDispatch();

    return (
        <div>
            <p>Login Status: {"" + loginStatus}</p>
            <h1>{counter}</h1>
            <div>
                Increase Value:
                <input type="text" />
            </div>
            <br />
            <button onClick={() => dispatch(inc())}>Increase</button>
            <button onClick={() => dispatch(dec())}>Decrease</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter