import React, { Component } from 'react';
import PetForm from './PetForm';
class AppointmentPage extends Component {

    state = {
        petName : 'Rover',
        vetName : 'Vet Name'
    }
    componentWillMount() {
        // TODO: query to find the id and populate fields
    }

    onSave = () => {

    }

    handleChange = (event) => {
        this.setState({petName: event.target.value});
    }

    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h1>
                        Appointment for {this.state.petName}
                    </h1>
                </div>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label forHtml="exampleInputPassword1">Seeing Vet</label>
                        <input type="text" readOnly className="form-control" id="exampleInputPassword1" value={this.state.vetName}/>
                    </div>
                    <div className="form-group">
                        <label forHtml="exampleInputPassword1">Patient Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" value={this.state.petName} onChange={this.handleChange}/>
                    </div>
                    <PetForm/>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default AppointmentPage;
