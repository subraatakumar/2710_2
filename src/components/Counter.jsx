import React, { useReducer, useState } from 'react'
import { inc, dec, reset } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const [inputValue, setInputValue] = useState(0)
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
                <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <br />
            <button onClick={() => dispatch(inc(inputValue))}>Increase</button>
            <button onClick={() => dispatch(dec(inputValue))}>Decrease</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter