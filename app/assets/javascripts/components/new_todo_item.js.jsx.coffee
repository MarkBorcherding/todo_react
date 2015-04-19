window.NewTodoItem = React.createClass

  getInitialState: ->
    todo_text: ""

  changeText: (event) ->
    @setState
      todo_text: event.target.value

  createTodo: ->
    @props.onCreate @state.todo_text

  render: () ->
    `<fieldset>
        <legend>new</legend>
        <input type="text" value={this.todo_text} onChange={this.changeText} />
        <button onClick={this.createTodo}>create</button>
     </fieldset>`

