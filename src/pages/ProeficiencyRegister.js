import React, { Component } from 'react';
import { connect } from "react-redux";

class ProeficiencyRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return(
            <div>Bem-vindo ao quem-me-ajuda!</div>
        );
    }
}

const stateToProps = state => ({
    user: state.user
});

export default connect(stateToProps)(ProeficiencyRegister);
