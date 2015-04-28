var TodoList = React.createClass({

  getInitialState: function() {
    return {items: ["a"]};
  },

  onCreateTodo: function(todo) {
    this.state.items.push(todo);
    this.setState({ items:  this.state.items});
  },

  destroy: function(){
    // Just remove something for now.
    this.state.items.pop();
    this.setState({ items: this.state.items});
  },

  render: function() {

    var todoItems = this.state.items.map(function(item) {
      return <li><TodoItem item={item} destroy={this.destroy}/></li>;
    });

    return  <div>
              <fieldset>
                <legend>Items</legend>
                <ul>
                  {todoItems}
                </ul>
              </fieldset>
              <NewTodoItem onCreate={this.onCreateTodo} />
            </div>;
  }
});
