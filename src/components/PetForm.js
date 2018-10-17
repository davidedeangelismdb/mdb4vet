import React, { Component } from 'react';
import stitch from '../stitch/functions';

class PetForm extends Component {
    state = {
        prescriptions: [],
        gender: null,
        type: null,
        breed: null,
        last_visit: null,
        first_name: null,
        last_name: null,
        phone_number: null,
        name: null,
        _id: null
    }

    componentWillReceiveProps(props) {
        const pet = props.pet;
        const { _id } = pet;
        const prescriptions = pet.prescriptions;
        const { gender, breed, name, type, last_visit, photo } = pet.patient;
        const { first_name, last_name, phone_number } = pet.owner;
        this.setState({ prescriptions, gender, type, breed, last_visit, first_name, last_name, phone_number, name, _id, photo });
    }
    
    onSave = () => {
        const { _id, name, prescriptions, gender, breed, type, last_visit, first_name, last_name, phone_number, photo } = this.state;
        console.log(this.state);
        // save the pet to the db
        const patient = {
            _id : _id.toString(),
            patient: {
                name,
                type,
                breed,
                gender,
                photo,
                last_visit
            },
            owner: {
                first_name,
                last_name,
                phone_number
            },
            prescriptions
        }
        stitch.savePet(patient);
    }

    addPrescription = (prescription) => {
        const all = this.state.prescriptions;
        all.push(prescription);
        this.setState({ prescriptions: all });
    }

    deactivate = (prescription, all) => {
        prescription.active = false;
        this.setState({ prescriptions: all });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label forHtml="exampleInputPassword1">Patient Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="row">
                    <h3 className="col-md-6"> Active Prescriptions</h3>
                    <h3 className="col-md-6"> Inactive Prescriptions</h3>
                </div>
                <div className="row">
                    <ul className="list-group col-md-6">
                        {this.state.prescriptions.filter(p => p.active).map(p => {
                            return (
                                <li key={p.id} className="list-group-item">{p.name}<button className="close" type="button" onClick={() => this.deactivate(p, this.state.prescriptions)}>x</button></li>
                            )
                        })}

                    </ul>
                    <ul className="list-group col-md-6">
                        {this.state.prescriptions.filter(p => !p.active).map(p => {
                            return (
                                <li key={p.id} className="list-group-item">{p.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <label >Add Prescription</label>
                        <input type="text" className="form-control" />
                        <div className="input-group-btn">
                            <button onClick={() => this.addPrescription({ name: "test", active: true })} type="button" className="btn btn-primary">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >Gender</label>
                            <input type="text" className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Type</label>
                            <input type="text" className="form-control" name="type" value={this.state.type} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Type</label>
                            <input type="text" className="form-control" name="breed" value={this.state.breed} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Last Visit</label>
                            <input type="text" readOnly className="form-control" name="last_visit" value={this.state.last_visit} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-md-6" >

                        <img className="img-circle" src={this.state.photo} style={{ height: "auth", maxWidth: "100%" }} />
                    </div>
                </div>
                <button onClick={this.onSave} type="button" className="btn btn-primary">Save</button>

            </div>
        );
    }
}

export default PetForm;
