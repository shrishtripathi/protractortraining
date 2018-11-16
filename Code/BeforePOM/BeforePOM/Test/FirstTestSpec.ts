import { browser } from 'protractor';

describe("Going to write first test", () => {

    it("should pass without any issue", () => {
        
        browser.get("http://www.executeautomation.com");
    
        let a = 12
        expect(a).toBe(12);
    });

    it("should not pass as the values are undefined", () =>{
        let u=1;
        expect(u).toBeDefined("Not definied");
    })

    it("Without any expectation", () =>{

    })

});