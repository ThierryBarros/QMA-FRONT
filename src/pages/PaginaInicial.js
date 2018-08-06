import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../components/credentials/Credentials.css';
import { createUser } from '../actions/user.action';

const initialState = {
    registration: '',
    name: '',
    phone: '',
    email: '',
    password: ''
};

class HomePage extends Component{

    constructor(props){
        super(props);

        this.state = initialState;
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submit = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        const { history } = this.props;

        dispatch(createUser(this.state))
            .then(() => history.push('/logar'))
            .catch(() => this.setState(initialState));
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.submit}>
                    <div className="form-group">
                       

                        <input value={this.state.name} onChange={this.handleChange} name="name"
                        type="text" className="form-control" placeholder="Complete Name"/>
                    </div>

                    <div className="form-group">
                        

                        <input value={this.state.registration} onChange={this.handleChange} name="registration"
                        type="text" className="form-control" placeholder="Registration"/>
                    </div>

                    <div className="form-group">
                        

                        <input value={this.state.phone} onChange={this.handleChange} name="phone"
                        type="text" className="form-control" placeholder="Phone"/>
                    </div>

                    <div className="form-group">
                    

                        <input value={this.state.email} onChange={this.handleChange} name="email"
                        type="email" className="form-control" placeholder="Enter email"/>

                       
                    </div>
                    <div className="form-group">
                       
                        <input value={this.state.password} onChange={this.handleChange} name="password"
                        type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        );
    }
}
export default connect()(HomePage);
