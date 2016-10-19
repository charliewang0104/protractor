/**
 * SMM-001
 * This test case will cover the testing for Hello app
 */
var angularHomepage = require('../PageObjects/angularhomepage.js'); 
var testData = require('../TestData/testdata.json');

var testHello = function () {	
	 this.verifyGreeting = function() {
		 angularHomepage.setName(testData.Name);
		 expect(angularHomepage.getGreeting()).toEqual('Hello '+testData.Name+'!');
	 };
};

module.exports = new testHello();