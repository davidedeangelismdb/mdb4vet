import React, { Component } from 'react';
import stitch from './stitch/functions';

import AppointmentPage from './components/AppointmentPage';
class App extends Component {
  render() {
    stitch.getAppointments().then(a => {
      console.log(a);
    })
    return (
      <AppointmentPage />
    );
  }
}

export default App;
