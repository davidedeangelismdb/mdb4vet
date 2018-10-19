import React, { Component } from 'react';
import PetForm from './PetForm';
import stitch from '../stitch/functions';

class AppointmentPage extends Component {
    state = {
        vetId : null,
        desc : null,
        pet : {}
    }
    componentWillMount() {
        const { appt } = this.props;
        const id = appt.patient_id.toString();
        stitch.getPatient(id).then(result => {
            const pet = result[0];
            this.setState({pet, desc : pet.desc, petName : pet.patient.name});
        });
    }


    handleChange = (event) => {
        this.setState({petName: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>
                        Appointment for {this.state.petName}
                    </h1>
                </div>
                <form>
      
                    <PetForm pet={this.state.pet}/>
                </form>
            </div>
        );
    }
}

export default AppointmentPage;
