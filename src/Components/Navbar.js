import React, { useEffect, useState } from 'react'
export default function Navbar({setAbc}) {
    const fecthData = () => {
      fetch("https://reqres.in/api/users?page=1")
        .then(res => res.json())
        .then(data => {
        //   setData(data.data)
        //   console.log(data)
            setAbc(data.data)
        })    
    }
    const hand=(e)=>{
        e.preventDefault()
        fecthData()
    }
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    <a className="navbar-brand">PROFILES</a>
                    <form className="d-flex">
                        <button className ="btn btn-outline-success" type="submit" onClick={hand}>Get Users</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
