import React, { Component } from 'react';
import stitch from '../stitch/functions';

class LoginPage extends Component {

    state = {
        loggedIn: false,
        username: '',
        password: '',
        error: false,
    }

    login = async () => {
        const { username, password } = this.state;
        try {
            await stitch.auth(username, password);
            this.setState({ loggedIn: true, error : false });
        } catch (error) {
            this.setState({ error : true });
            await stitch.logout();
        }
    }

    logout = async () => {
        await stitch.logout();
        this.setState({ loggedIn: false});
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const body = this.state.loggedIn ? (this.props.children) : (<div className="container">
            <div className="row">
                <div className="form_bg">
                    <form>
                        <h2 className="text-center">Login to MDB 4 Vets</h2>
                        <br />
                        <div className="form-group">
                            <input type="email" name="username" onChange={this.handleChange} value={this.state.username} className="form-control" id="userid" placeholder="User id" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" onChange={this.handleChange} value={this.state.password} className="form-control" id="pwd" placeholder="Password" />
                        </div>
                        <br />
                        {this.state.error && (<div className="alert alert-danger" role="alert">
                Error logging in.
            </div>)}
                        <button type="button" className="btn btn-block btn-success" id="login" onClick={this.login}>Login</button>
                    </form>
                </div>
            </div>
        </div>)

        return <div>
            {body}
            {this.state.loggedIn && <button type="button" className="btn btn-block btn-warning" onClick={this.logout}>Logout</button>}
        </div>
    }
}

export default LoginPage;
