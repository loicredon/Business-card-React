import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img className="profile-pic" src="prisonmike.png" />
            <h1>Loïc Redon</h1>
            <h4>Frontend Developer</h4>
            <p>jabemalo30@gmail.com</p>
            <div className="buttons">
            <a className="email-btn">
                <img src="Mail.png" /> Email
            </a>
            <a className="linkedin-btn">
                <img src="linkedin.png" /> Linkedin
            </a>
            </div>
        </div>
    )
}