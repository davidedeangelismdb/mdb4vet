import React, { Component } from 'react';
import PetForm from './PetForm';
class AppointmentPage extends Component {

    componentWillMount() {
        const { id } = this.props;
        // TODO: query to find the id and populate fields
    }

    onSave = () => {

    }

    render() {
        const petName = "Rover";
        const vetName = "Vet Name";
        return (
            <div className="container">
                <div className="page-header">
                    <h1>
                        Appointment for {petName}
                    </h1>
                </div>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label forHtml="exampleInputPassword1">Seeing Vet</label>
                        <input type="text" readOnly className="form-control" id="exampleInputPassword1" value={vetName}/>
                    </div>
                    <div className="form-group">
                        <label forHtml="exampleInputPassword1">Patient Name</label>
                        <input type="text" readOnly className="form-control" id="exampleInputPassword1" value={petName}/>
                    </div>
                    <PetForm/>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>

        );
    }
}

export default AppointmentPage;
