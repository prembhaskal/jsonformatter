import React from 'react'

export default class CopyToClip extends React.Component {

    constructor(props) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        let textToCopy = this.props.text
        console.debug("text to copy to clipboard -- '" + textToCopy + "'")
        navigator.clipboard.writeText(textToCopy)
    }

    render() {
        return (
            <button onClick={this.handleCopy}>
                Copy To Clipboard
            </button>
        );
    } 
}