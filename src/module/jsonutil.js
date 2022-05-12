export function prettifyJSONString(inputText) {
    let jsonData = parseJSON(inputText);
    if (jsonData != null) {
        return JSON.stringify(jsonData, null, 2);
    }

    return `NOT A VALID JSON - ${inputText}`;
}

function parseJSON(text) {
    try {
        let jsonObj = JSON.parse(text);
        return jsonObj;
    } catch (err) {
        console.error(`error from parsing json: ${err}`)
        return null;
    }
}