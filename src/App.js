import React, { Component } from 'react';

import AppointmentList from './components/AppointmentList';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <div class="container">
        <LoginPage>
            <div class="jumbotron" style={{backgroundSize : "100% 100%;", backgroundImage : "url('http://cdn.shopify.com/s/files/1/2611/1722/files/cropped-psa-tornado-season-vet-organics-iStock-667476898_1200x1200.png?v=1519876269')"}}>
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
