### describes design of components

#### InputPanel
- props: <none>
- state: text input by the user.
 

#### ConvertPanel
- props:
  - text: any text
  - callback: to send the prettified json back to parent component.
- state: <none>
- trigger: on button click, generate the prettified json and invoke callback


#### OutputPanel
- props: pretty json text.
- state: <none>
