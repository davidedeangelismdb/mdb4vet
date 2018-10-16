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
        ]
    }
    componentWillMount() {
        const { id } = this.props;
        // TODO: query to find the id and populate fields
    }

    addPrescription = (prescription) => {
        console.log(prescription);
        const all = this.state.prescriptions;
        all.push(prescription);
        this.setState({ prescriptions: all });
    }

    deactivate = (prescription, all) => {
        prescription.active = false;
        this.setState({ prescriptions: all });
    }

    render() {
        const petName = "Rover";
        const vetName = "Vet Name";
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
                        <li>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <div className="input-group-btn">
                                        <button onClick={() => this.addPrescription({ name: "test", active: true })} type="button" className="btn btn-primary">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="list-group col-md-6">
                        {this.state.prescriptions.filter(p => !p.active).map(p => {
                            return (
                                <li key={p.id} className="list-group-item">{p.name}</li>
                            )
                        })}
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control" />
                                <div className="input-group-btn">
                                    <button onClick={() => { }} type="button" className="btn btn-primary">
                                        +
                                        </button>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PetForm;
