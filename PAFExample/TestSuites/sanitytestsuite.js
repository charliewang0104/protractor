/**
 * @SMM-001,@SMM-002
 * This automation test suite will cover the sanity test cases.
 *     - Test Hello app
 *     - Test Todo app
 */

describe('angularjs homepage sanity testing', function() {
  var angularHomepage = require('../PageObjects/angularhomepage.js'); 
  var testHello = require('../TestCases/testhello.js'); 
  var testTodo = require('../TestCases/testtodo.js'); 

  beforeEach(function() {
	  angularHomepage.get();
  });
  
  it('should greet the named user', function() {
	testHello.verifyGreeting();	
  });
  
  it('should add a todo', function() {
	testTodo.addTodo();
	testTodo.completeTodo();
  });
});