// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
	    sanity: 'TestSuites/SanityTestSuite.js',
  },
  capabilities:{
    browserName: 'chrome'
  },
  onPrepare: function() {
	var jasmineReporters = require('jasmine-reporters');
	
	// returning the promise makes protractor wait for the reporter config before executing tests
    return browser.getProcessedConfig().then(function(config) {
        // you could use other properties here if you want, such as platform and version
        var browserName = config.capabilities.browserName;

        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            consolidateAll: false,
            savePath: 'TestResults',
            modifyReportFileName: function(generatedFileName, suite) {
                // this will produce distinct file names for each capability,
                // e.g. 'firefox.SuiteName' and 'chrome.SuiteName'
                return browserName + '.' + generatedFileName ;
            }
        });
        jasmine.getEnv().addReporter(junitReporter);
    });
//	jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter());
  }
};