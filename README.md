# asos-auto-test
Selenium tests for asos 

# Asos web site tests using Selenium
This is a Maven project using Selenium to test the features/scenarios specified in the document (Assignment-Neil.docx).
Language used is Java and test are running within cucumber framework.

# Requirements
Windows 7 (or above) OS

Intelij IDEA 15.0.3 (IDE)
	- Maven plug in
	- Cucumber plug in
	
Java sdk 8 (1.8)

Google Chrome browser (Version 55.0.2883.87 m)


# Installation and execution
Download the latest version of Google Chrome Driver (release 2.25) and uncompress in your local path "C://driver/chromedriver.exe"

http://www.seleniumhq.org/download/

http://chromedriver.storage.googleapis.com/index.html?path=2.25/

Uncompress the project into your local system and run the tests from IDE running the file runTest (run) or from command line
with the command:

mvn clean install -Dtest=* test

# Notes
Note that testing on 'live' environments is not the best aproach for these selenium tests as the data can change and some
expected results too making some tests fail.
