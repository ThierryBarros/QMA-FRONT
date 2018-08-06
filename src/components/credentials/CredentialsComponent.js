import React, { Component } from 'react';
import './Credentials.css';

class CredentialsComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        };
    }

    extractAndSubmit = (event) => {
        let { email, password } = this.state;
        this.props.onSubmit({email, password});
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Email address</label>

                        <input value={this.state.email} onChange={this.handleChange} name="email"
                        type="email" className="form-control" placeholder="Enter email"/>

                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input value={this.state.password} onChange={this.handleChange} name="password"
                        type="password" className="form-control" placeholder="Password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">{this.props.actionName}</button>
                </form>
            </div>
        );
    }
}

export default CredentialsComponent;