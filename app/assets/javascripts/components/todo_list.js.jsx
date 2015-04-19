var TodoList = React.createClass({

  getInitialState: function() {
    return {items: ["a"]}
  },

  onCreateTodo: function(todo) {
    this.state.items.push(todo);
    this.setState({ items:  this.state.items});
  },

  render: function() {

    var todoItems = this.state.items.map(function(item) {
      return <div>{item}</div>;
    });

    return <div>
             <fieldset>
              <legend>Items</legend>
              {todoItems}
             </fieldset>
             <NewTodoItem onCreate={this.onCreateTodo} />
           </div>;
  }
});
