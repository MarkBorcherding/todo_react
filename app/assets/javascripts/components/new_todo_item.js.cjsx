window.NewTodoItem = React.createClass

  getInitialState: ->
    todo_text: ""

  changeText: (event) ->
    @setState
      todo_text: event.target.value

  createTodo: ->
    @props.onCreate @state.todo_text

  render: () ->
    <fieldset>
        <legend>new</legend>
        <input type="text" value={@todo_text} onChange={@changeText} />
        <button onClick={@createTodo}>create</button>
     </fieldset>

