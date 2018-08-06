import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../components/credentials/Credentials.css';
import { login } from '../actions/user.action';

const initialState = {
    registration: '',
    password: ''
};

class LoginPage extends Component {
    constructor(props) {
        super(props);

        const { user } = this.props;
        let { registration } = user;
        if (registration){
            this.state = { registration };
        } else {
            this.state = initialState;
        }
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

        dispatch(login(this.state))
            .then(() => history.push('/alunos'))
            .catch(() => this.setState(initialState));
    }

    render() {

        return (
            <div>
                <form className="form" onSubmit={this.submit}>
                    <div className="form-group">
			<label>Bem-vindo ao quem-me-ajuda!</label>
                        <input value={this.state.registration} onChange={this.handleChange} name="registration"	
                        type="text" className="form-control" placeholder="Username"/>
                    </div>

                    <div className="form-group">
                        
                        <input value={this.state.password} onChange={this.handleChange} name="password"
                        type="password" className="form-control" placeholder="Password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

const stateToProps = state => ({
    user: state.user
});

export default connect(stateToProps)(LoginPage);
