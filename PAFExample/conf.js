// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
	    sanity: 'TestSuites/SanityTestSuite.js',
  },
  capabilities:{
    browserName: 'chrome'
  }
};