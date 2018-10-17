import React, { Component } from 'react';

const dateMap = {
    0 : "Sunday",
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday"
}

class AppointmentWrapper extends Component {

    state = {
        show: false,
        buttonText: this.getDateString(),
        pet : {}
    }

    getDateString(){
        const date = this.props.appt.date;
        return `Appointment at ${dateMap[date.getUTCDay()]} at ${date.getHours()}:${date.getMinutes()}`
    }

    onClick = () => {
        if (this.state.show) {
            this.setState({ show: false, buttonText: this.getDateString()});
        } else {
            this.setState({ show: true, buttonText: 'Collapse' });
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.onClick} type="button" className="btn btn-lg btn-block btn-primary">{this.state.buttonText}</button>
                <div className="container">
                    {this.state.show && this.props.children}
                </div>
            </div>
        );
    }
}

export default AppointmentWrapper;
