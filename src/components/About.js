import React, { Component } from 'react'

class About extends Component {
    constructor() {
        super();
        this.state = { date: new Date() }
    }
    componentDidMount() {
        setInterval(
            () => this.time(),
            1000
        );
    }
    time() {
        this.setState({ date: new Date() })
    }

    render() {
        console.log("render works");
        return (
            <div className="text-center">
                <h1>{this.state.date.toLocaleString()}</h1>
            </div>
        )
    }

} export default About