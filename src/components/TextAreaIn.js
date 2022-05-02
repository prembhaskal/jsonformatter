import React from 'react'

export default class TextAreaIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.setInput({ value: event.target.value })
    }

    render() {
        return (
            <textarea value={this.props.input} onChange={this.handleChange} />
        );
    }
}