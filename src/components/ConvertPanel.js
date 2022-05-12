import React from 'react'
import { prettifyJSONString } from '../module/jsonutil';

export default class ConvertPanel extends React.Component {
    constructor(props) {
        super(props)
        this.convertToPrettyJson = this.convertToPrettyJson.bind(this);
    }

    convertToPrettyJson() {
        let prettyJSON = prettifyJSONString(this.props.text);
        console.log(`pretty json is ${prettyJSON}`);

        this.props.updatePrettyJSON(prettyJSON)
    }

    render() {
        return (
            <button className='ui blue submit button' onClick={this.convertToPrettyJson}>Convert</button>
        );
    }
}