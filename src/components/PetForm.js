import React, { Component } from 'react';
class PetForm extends Component {

    state = {
        prescriptions: [
            { name: "some drug", active: true, id: 0 },
            { name: "some other drug", active: true, id: 1 },
            { name: "and another drug", active: false, id: 2 },
            { name: "this drug", active: true, id: 3 },
            { name: "this drug too", active: false, id: 4 },
            { name: "almost last one", active: true, id: 5 },
            { name: "last one!", active: false, id: 6 }
        ],
        gender: "male",
        type: 'dog',
        breed: "poodle",
        lastVisit: new Date()

    }
    componentWillMount() {
        // TODO: query to find the id and populate fields
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
                            <label >Type</label>
                            <input type="text" readOnly className="form-control" name="lastVisit" value={this.state.lastVisit} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-md-6" >

                    <img className="img-circle" src="https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg"style={{height:"auth", maxWidth:"100%"}} />
                    </div>
                </div>

            </div>
        );
    }
}

export default PetForm;
