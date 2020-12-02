import React from 'react'
import "../styles/Header.scss"
import search from "../assets/Search.png"
import arrow from "../assets/ArrowDown.png"

const Header = () => {

    let currentTime = new Date();

    let year = currentTime.getFullYear();
    let month = currentTime.toLocaleString('default', { month: 'long' })
    let day = currentTime.getDay()
    let dayName = currentTime.toLocaleString("default", { weekday: "long" })
    return (
        <div className="header-containor">
            <div className="top-header">
                <h3 className="top-header-month">{month} {year}</h3>
                <div className="top-header-days">
                    <h4 >Today</h4>
                    <p style={{ marginTop: "4px" }}> {day}, {dayName}</p>
                </div>
                <div className="top-header-search">
                    <img src={search} className="top-header-search-icon" />
                    <input className="top-header-search-input" placeholder="Search" />
                </div>
            </div>
            <div className="title-callender">
                <img src={arrow} className="title-callender-Arrow title-callender-Arrow-left" />
                <h4 className="title-callender-sub">Day</h4>
                <h4 className="title-callender-sub">Week</h4>
                <h4 className="title-callender-sub">Month</h4>
                <img src={arrow} className="title-callender-Arrow title-callender-Arrow-right" />
            </div>
            <div className="days-of-week">
                <span className="days-of-week-name">Sun</span>
                <span className="days-of-week-name">Mon</span>
                <span className="days-of-week-name">Tue</span>
                <span className="days-of-week-name">Wed</span>
                <span className="days-of-week-name">Thu</span>
                <span className="days-of-week-name">Fri</span>
                <span className="days-of-week-name">Sun</span>
            </div>
        </div>
    )
}

export default Header
