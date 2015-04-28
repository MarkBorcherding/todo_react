var TodoItem = React.createClass({
  remove: function(){
    this.props.destroy(this.props.item);
  },

  render: function(){
    return  <div>{this.props.item}
              <button onClick={this.remove}>Remove</button>
            </div>;
  }
});
