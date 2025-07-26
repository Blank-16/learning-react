import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password });
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="" placeholder='User Name' id="" />
            {" "}
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="" placeholder='User Password' id="" />
            {" "}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}