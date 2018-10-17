import React, { Component } from 'react';
class AppointmentWrapper extends Component {

    state = {
        show: false,
        buttonText: 'Expand'
    }

    onClick = () => {
        if (this.state.show) {
            this.setState({ show: false, buttonText: 'Expand' });
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
