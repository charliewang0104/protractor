/**
 * This is the wrapper script for Angular Homepage and provides Page Object functions to be used in Protractor test scripts
 */
var angularHomepage = function() {
  var nameInput = element(by.model('yourName'));
  var greeting = element(by.binding('yourName'));

  var todoInput = element(by.model('todoList.todoText'));
  var addButton = element(by.css('[value="add"]'));
  var todoList = element.all(by.repeater('todo in todoList.todos'));
  var completedAmount = element.all(by.css('.done-true'));
  
  this.get = function() {
    browser.get('http://www.angularjs.org');
  };

  this.setName = function(name) {
    nameInput.sendKeys(name);
  };

  this.getGreeting = function() {
    return greeting.getText();
  };
  
  this.addTodo = function(todotext) {
	todoInput.sendKeys(todotext);
	addButton.click();
  };
  
  this.getTextFromTodoList = function(index) {
	  return todoList.get(index).getText();
  };
  
  this.getCheckboxFromTodoList = function(index) {
	  return todoList.get(index).element(by.css('input'));
  };
  
  this.getCompletedAmount = function() {
	  return completedAmount.count();
  };
  
  this.getTodoListCount = function() {
	  return todoList.count();
  };
  
};

module.exports = new angularHomepage();