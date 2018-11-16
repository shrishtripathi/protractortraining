Prerequisite:
Verify software program from command prompt 
1. "node -v"               
2. "npm -v"                
3. "protractor --version"  
4. "tsc -version"          
Update the webdriver manager driver from command prompt
5. "webdriver-manager update"
6. Prefer IDE/ Software tool is Visual Studio Code.


To run the test case as npm run, follow these steps below:
1.  Install all dipendencies mentioned in package.json by running :
    "npm install" in command prompt.(project level )
    You should see "node_modules" in project level after installation done.
2.  Run command to first update webdriver manager
    "npm run webdriver-update"
3.  Run command to run test case
    "npm run e2e"
4.  To check reports, go to Target/Reports/screenshots folder which generates after executing the scripts.