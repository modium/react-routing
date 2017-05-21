import React, { Component } from 'react';

class Polls extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.createPoll = this.createPoll.bind(this);
    }

    createPoll() {
        console.log('Poll created.');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Polls</h2>
            <button className="btn btn-default" onClick={this.createPoll}>Create Poll</button>
            </div>
        );
    }
}

export default Polls;
