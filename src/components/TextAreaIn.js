import React from 'react'

export default class TextAreaIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let inputText = event.target.value;
        // this.props.setInput({ value: inputText });
        this.props.updateInputText(inputText);
    }

    render() {
        return (
            <textarea value={this.props.input} onChange={this.handleChange} />
        );
    }
}