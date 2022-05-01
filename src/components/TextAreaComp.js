import React from 'react'

export default class TextAreaComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '{"data": "sample json", "content":{"data": "can be nested"}}'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <textarea value={this.state.value} onChange={this.handleChange} />
        );
    }
}