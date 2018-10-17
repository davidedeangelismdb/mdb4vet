import React, { Component } from 'react';
import AppointmentPage from './AppointmentPage';
import AppointmentWrapper from './AppointmentWrapper';
import stitch from '../stitch/functions';

class AppointmentList extends Component {
    state = {
        appts: []
    }
    componentWillMount() {
        stitch.getAppointments().then(appts => {
            this.setState({ appts });
        });
    }
    render() {
        return (
            <div className="container">
                <div>
                    {this.state.appts.map(appt => {
                        return (
                            <AppointmentWrapper>
                                <AppointmentPage appt={appt} />
                            </AppointmentWrapper>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default AppointmentList;
