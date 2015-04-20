describe("My great feature", function() {

  it("will change the world", function() {
    var todoList = React.addons.TestUtils.renderIntoDocument(<TodoList/>);

    expect(todoList.getInitialState()).to.eql( {items:['a']} );
  });

});
