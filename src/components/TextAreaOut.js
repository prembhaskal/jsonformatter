import React from 'react'

export default class TextAreaOut extends React.Component {
    render() {
        return (
            <div>
                <textarea value={this.props.text} />
            </div>
        );
    }
}