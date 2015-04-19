var NewTodoItem = React.createClass({

  getInitialState: function() {
    return { todo_text: "" };
  },

  changeText: function(event){
    this.setState({ todo_text: event.target.value});
  },

  createTodo: function() {
    this.props.onCreate(this.state.todo_text);
  },

  render: function() {
    return <fieldset>
              <legend>new</legend>
              <input type="text" value={this.todo_text} onChange={this.changeText} />
              <button onClick={this.createTodo}>create</button>
           </fieldset>;
  }
});
