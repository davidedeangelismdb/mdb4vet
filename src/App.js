import React, { Component } from 'react';

import AppointmentList from './components/AppointmentList';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <div class="container">
        <LoginPage>
            <div class="jumbotron">
              <h1>MongoDB 4 Vets</h1>
              <p>Manage all of your appointments.</p>
            </div>
            <AppointmentList />
        </LoginPage>
      </div>
    );
  }
}

export default App;
