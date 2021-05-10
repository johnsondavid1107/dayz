import React, { Component } from "react"
import Moment from "react-moment"
import "./calendar.css"


class Calendar extends Component {




    render() {
        let today = <Moment format="MMM Do YY" />
        let currentYear = <Moment format="YYYY" />
        let currentMonth = <Moment format="MMM" />
        let monthText = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]



        return (
            <div>
                <h1> {currentMonth} </h1>
                <ul className="monthList">{monthText.map((month, index) =>
                    <li key={index}>{month}</li>
                )}</ul>


            </div>)
    }

}

export default Calendar;