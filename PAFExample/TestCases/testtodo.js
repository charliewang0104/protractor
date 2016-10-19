/**
 * SMM-001
 * This test case will cover the testing for Todo app
 */
var angularHomepage = require('../PageObjects/angularhomepage.js');
var testData = require('../TestData/testdata.json');
	
var testTodo = function () {
	this.addTodo = function() {
		angularHomepage.addTodo(testData.TodoSummary);
		 
		expect(angularHomepage.getTodoListCount()).toEqual(3);
		expect(angularHomepage.getTextFromTodoList(2)).toEqual(testData.TodoSummary);
	 };
	 
	 this.completeTodo = function() {
		angularHomepage.getCheckboxFromTodoList(2).click();
		expect(angularHomepage.getCompletedAmount()).toEqual(2);
	 }; 
};

module.exports = new testTodo();