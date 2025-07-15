
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch("https://api.github.com/users/Blank-16")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data);
    //     })
    // }, [])

    const data = useLoaderData();

  return (
    <div className='text-center text-white bg-gray-700 p-4 m-4 text-2xl' >
        Name: {data.name} <br />
        Github Followers : {data.followers} 
        <img src={data.avatar_url} alt="avatar" className='rounded-full h-46'/>
    
    </div>

  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Blank-16')
    return response.json();
}