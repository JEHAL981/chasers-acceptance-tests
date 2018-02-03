Clapham-Chasers-Acceptance-Test
==============================

This is a basic example of WebdriverIO + Cucumberjs + babel (es5) usage.


Prerequisites
------------

You will need to install the Chrome browser and the npm package manager before you can run these tests locally.

1. Download and install [Chrome](https://www.google.com/chrome/index.html).
1. Download and install [Node v8.1.1](https://nodejs.org/en/).

The test suite also has a bunch of yarn dependencies which will be installed when you follow the installation
steps below.

* WebdriverIO
* Cucumber
* Babel ES5
* chai
* Selenium Standalone
* wdio cucumber-framework


Installation
------------

To install the test suite locally, including the above npm dependencies:

1. Clone this repository.
1. Run `yarn install` from the root directory of this repository.

### Bamboo
Running under build plan portal-web-acceptance-tests 

[http://bamboo.kobaltmusic.com:8085](http://bamboo.kobaltmusic.com)

1. Script `yarn run test:bamboo`

### Local

To run the tests locally against the test portal environment:

1. Run `yarn run test:local`


Configuration
-------------

- `conf/wdio.conf.js` and `conf/bamboo.conf.js` define the configuration of webdriverio.  
- `specs: [...]` defines matchers for the cucumber feature files to run as default. 
- `services` and `capabilities` define the nature of the selenium execution.
Most commonly support local (standalone) execution or Docker.
- `baseUrl:` defines the default/base URL to use for the tests.
This is most commonly the landing URL for the desired environment & app.
- `require: [...]` defines the matchers for the step definitions to use in the run.

For more information on configuration, see [CONFIGURATION FILE](http://webdriver.io/guide/testrunner/configurationfile.html)
from the WebdriverIO documentation.

To look at the tests
--------------------

Either just run the tests using the above directions, or take a look in the [features](features) directory.
Example: [kobalt-client-signin.feature](features/portal/v2/kobalt-client-signin.feature)


Road map
----

The team are currently working towards:
1. Replacing Allure HTML with Cucumber HTML reports.
2. Support Mobile Automation for Android & iOS (Appium)


Release Notes
-------------

Release details are on Kobaltmusic wiki page.

Kobalt-Portal Acceptance-Test Framework Release Notes:

[http://kwiki.kobaltmusic.com:8090](http://kwiki.kobaltmusic.com:8090/pages/viewpage.action?pageId=38636611)




## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-new-feature`)
5. Create new Pull Request
