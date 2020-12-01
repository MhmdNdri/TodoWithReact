import React from 'react'
import faker from "faker"
import "../styles/Profile.scss"
import avatar from "../assets/avatar.jpg"


const Profile = () => {
    return (
        <div className="profile">
            {/* we can use faker library to generate avatar and name but in this case maybe we get an error */}
            <img src={avatar} className="profile-img" />
            <p className="profile-title" >Good Morning</p>
            <p className="profile-name" >Angella!</p>
        </div>
    )
}

export default Profile
