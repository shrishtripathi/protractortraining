import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../pages/base.po';

let ibmdb = require("ibm_db");
let sql = require("mssql");

export class CommonFunctions extends BasePage {
	constructor() {
		super();
	}

	public async getTodayDate() {
		let today = new Date();
		let myDateString;
		today.setDate(today.getDate());
		myDateString = ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/' + today.getFullYear();
		return await myDateString;
	}
	public async getCurrentDate() {
		let date: Date = new Date();
		let day: string = date.getDate().toString();
		let month: string = (date.getUTCMonth() + 1).toString();
		let year: string = date.getFullYear().toString();
		let requiredDate = (month + '/' + day + '/' + year);
		return requiredDate;
	}
	public async randomNumberGenarator(noOfLetters: number) {
		let text: string = "";
		let possible: string = "1234567890";
		for (var i = 0; i < noOfLetters; i++) {
			text += await possible.charAt(Math.floor(Math.random() * possible.length));
		}
		console.log("random number is " + text);
		return await text;
	}

	public async randomNameGenarator(noOfLetters: number) {
		let text: string = "";
		let possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		for (var i = 0; i < noOfLetters; i++) {
			text += await possible.charAt(Math.floor(Math.random() * possible.length));
		}
		console.log("randopme name is " + text);
		return await text;
	}

	public async getTableIndex(tableid: string, columnName: string) {
		let tblIndex: number = 0;
		let flag: boolean = true;
		try {
			let tableHeaders: ElementArrayFinder = element.all(By.xpath("//*[@id='form:" + tableid + "']//th"));
			let tableHeadersCount = await tableHeaders.count();
			for (let i: number = 0; i < tableHeadersCount; i++) {
				let tableHeaderText = await tableHeaders.get(i).getText();
				await console.log("Column Text: " + tableHeaderText)
				if (tableHeaderText === columnName) {
					await console.log("index" + i);
					tblIndex = i;
					break;
				}
			}
		} catch (e) {
			console.log("error" + e);
		}
		return await tblIndex + 1;
	}


	public async  getColmnDataByColmnIndex(tblId: string, tblIndex: number) {
		var columnDatalist: string[] = new Array();
		try {
			let tableHeaders: ElementArrayFinder = element.all(By.xpath("//*[@id='form:" + tblId + "']/tbody/tr[contains(@id,'form:" + tblId + "')  and not(@style='display:none') ]/td[" + tblIndex + "]"));
			let tableHeadersCount = await tableHeaders.count();
			for (let i: number = 0; i < tableHeadersCount; i++) {
				let colmnData: string = await tableHeaders.get(i).getText();
				console.log("colmnData of i:" + i + " is " + colmnData)
				await columnDatalist.push(colmnData);
			}
			await console.log("size:" + columnDatalist.length);
		} catch (e) {
			await console.log("error" + e);
		}
		return await columnDatalist;
	}

	public async getCellValue(text1: string, columnName1: string, text2: string, coumnName2: string, requiredColumn: string) {
		try {
			let columnIndex1: number = await this.getTableIndex("results", columnName1);
			let columnIndex2: number = await this.getTableIndex("results", coumnName2);
			let requiredColumIndex: number = await this.getTableIndex("results", requiredColumn);
			let myXpath: string = '//tr[contains(@class,"iceRowSel")]/td[' + columnIndex1 + '][contains(.,"' + text1 + '")]/../td[' + columnIndex2 + '][contains(.,"' + text2 + '")]/../td[' + requiredColumIndex + ']';
			let requiredElementText: string;
			let elementIsPresent: boolean = await element(by.xpath(myXpath)).isPresent();
			await console.log("elementIsPresent :" + elementIsPresent)
			if (elementIsPresent) {
				requiredElementText = await element(by.xpath(myXpath)).getText();
				await console.log("requiredElementText: " + requiredElementText);
			}
			else {
				let nextButtonEnabled: ElementFinder = await element(By.xpath("//td/a[text()='Next']"));

				let nextButtonIsDisable: boolean = await element(By.xpath("//a[text()='Next' and contains(@onclick,'return false')]")).isPresent();
				if (!nextButtonIsDisable) {
					console.log(nextButtonEnabled);
					await console.log("inside next button enabled");
					let nextButton: ElementFinder = await element(By.xpath("//td/a[text()='Next']"));
					await nextButtonEnabled.click();
					await browser.sleep(8000);
					await this.getCellValue(text1, columnName1, text2, coumnName2, requiredColumn);
				}
				else {
					return await console.log("completed pagination, next button is disabled no data is found with given criteria");
				}
			}
			return requiredElementText;
		} catch (e) {
			await console.log("error in get cell value function" + e);
		}

	}

	public generateRandomString() {
		let text = "";
		let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
		for (let i = 0; i < 5; i++)
			text += possible.charAt(Math.floor(Math.random()
				* possible.length));
		return text;
	}

	public async pagination() {

		let nextButtonEnabled: ElementFinder = await element(By.xpath("//td/a[text()='Next']"));
		let nextButtonIsDisable: boolean = await element(By.xpath("//a[text()='Next' and contains(@onclick,'return false')]")).isPresent();
		if (!nextButtonIsDisable) {
			console.log("inside next button enabled");
			await nextButtonEnabled.click();
			await this.waitForActionToComplete();
			return true;
		}
		else {
			console.log("completed pagination, next button is disabled no data is found with given criteria");
			return false;
		}
	}

	public async getColumnIndex(columnName: any) {
		let columnIndex: number = -1;
		this.actions.mediumWait("waiting...");
		let numberOfColumns: ElementArrayFinder = element.all(by.xpath("(//table[@class='iceDatTbl'][1])[2]//th"));
		let size: number = await numberOfColumns.count();
		console.log("size of TH : " + size);
		let index: number = 1;
		try {
			for (index = 1; index <= size; index++) {
				let column_Name: string = await element(by.xpath("((//table[@class='iceDatTbl'][1])[2]//th)[" + index + "]")).getText();
				console.log("clumn name : " + column_Name);
				if (column_Name.trim() === columnName.trim()) {
					columnIndex = index;
					break;
				}
			}
		}
		catch (err) {
			console.log('---error---for index ' + index);
		}
		return await columnIndex;
	}

	public async getColumnIndexForMultiHeaderTable(tableid: string, header1: string, header2: string) {
		let tblIndex: number = 0;
		let flag: boolean = true;
		var chk1: string;
		var chk2: string;
		try {
			let tableHeaders: ElementArrayFinder = element.all(By.xpath("//table[@id='form:" + tableid + "']//th"));
			let tableHeadersCount = await tableHeaders.count();
			for (let i: number = 1; i < tableHeadersCount; i++) {
				chk1 = await element(By.xpath("//table[@id='form:"+tableid+"']//tr[1]//th[" + i + "]")).getText();
				chk2 = await element(By.xpath("//table[@id='form:"+tableid+"']//tr[2]//th[" + i + "]")).getText();
				if (chk1 == header1 && chk2 == header2) {
					tblIndex = i;
					console.log("tblIndex", tblIndex);
					break;
				}
			}
		}
		catch (e) {
			console.log("error" + e);
		}

		return await tblIndex;
	}

	public async getCellValueOfMultiHeader(text1: string, columnName1Header1: string, columnName1Header2: string, text2: string, coumnName2Header1: string, coumnName2Header2: string, requiredColumnHeader1: string, requiredColumnHeader2: string) {
		try {
			let requiredElementText: string;
			let columnIndex1: number = await this.getColumnIndexForMultiHeaderTable("results", columnName1Header1, columnName1Header2);
			let columnIndex2: number = await this.getColumnIndexForMultiHeaderTable("results", coumnName2Header1, coumnName2Header2);
			let requiredColumIndex: number = await this.getColumnIndexForMultiHeaderTable("results", requiredColumnHeader1, requiredColumnHeader2);

			do {

				let myXpath = "//*[@id='form:results']/tbody/tr[contains(@id,'form:results')  and not(@style='display:none')]" +
					"[td[" + columnIndex1 + "][contains(.,'" + text1 + "')]]" +
					"[td[" + columnIndex2 + "][contains(.,'" + text2 + "')]]" +
					"/td[" + requiredColumIndex + "]";

				console.log("myXpath", myXpath);

				try {

					let elementIsPresent: boolean = await browser.isElementPresent(element(by.xpath(myXpath)));
					if (elementIsPresent) {
						requiredElementText = await element(By.xpath(myXpath)).getText();
						console.log("requiredElementText", requiredElementText);
						return requiredElementText;
					}

				}
				catch (e) {
					console.log("Error : " + e);
				}
			} while (await this.pagination());

		} catch (e) {
			await console.log("error in get cell value function" + e);
		}
	}

	public getRequiredXpath(columnName: string, columnValue: string, columnIndex: number) {

		let xpath: string = "";
		switch (columnName) {
			case "PWR/DRVR\nNOTES":
			case "TCALL\nLOC":
				xpath = "./td[" + columnIndex + "][./input[@value='" + columnValue + "']]";
				break;
			case "ORDER\nNUMBER":
				xpath = "./td[" + columnIndex + "][./a[text()='" + columnValue + "']]";
				break;
			case "Order\nNbr":
				xpath = "./td[" + columnIndex + "][not(.//a)]";
				break;
			case "D\nS":
				xpath = "./td[" + columnIndex + "][.='" + columnValue + "']";
				break;
			default:
				break;
		}
		return xpath;
	}

	public async getCompleteXpathForHeaders(tableId: string, ...args) {

		let completeXpath = "//*[@id='form:" + tableId + "']/tbody/tr[";
		let argsCount = args.length;

		for (let index = 0; index < argsCount; index = index + 2) {
			let columnIndex = await this.getTableIndex(tableId, args[index]);
			console.log("columnIndex for " + args[index] + " : " + columnIndex);
			completeXpath += this.getRequiredXpath(args[index], args[index + 1], columnIndex);
			if (index < argsCount - 2) {
				completeXpath += " and ";
			}
		}

		completeXpath += "]";
		console.log("completeXpath: " + completeXpath);
		return completeXpath;
	}

	public async getDriverAlpha(text1: string, columnName1: string, requiredColumn: string) {
		try {

			console.log('started getDriverAlpha');
			let columnIndex1: number = await this.getTableIndex("results", columnName1);
			await console.log("columnIndex1 :" + columnIndex1);
			let requiredColumIndex: number = await this.getTableIndex("results", requiredColumn);
			await console.log("requiredColumIndex :" + requiredColumIndex);

			do {
				let myXpath: string = '//tr[contains(@class,"iceRowSel")]/td[' + columnIndex1 + '][contains(.,"' + text1 + '")]/../td[' + requiredColumIndex + ']//a/span';
				console.log("xpath :" + myXpath);
				let records: ElementArrayFinder = element.all(by.xpath(myXpath));
				let recordsCount: number = await records.count();
				console.log("recordsCount :" + recordsCount);
				if (recordsCount > 0) {

					for (let index = 0; index < recordsCount; index++) {
						let currentWindow: any = await browser.getWindowHandle();
						await this.actions.click(records.get(index), "requiredElement click");
						await this.actions.mediumWait("medium wait after clicking");

						await this.actions.selectWindow(2, 'check details window');
						await this.actions.mediumWait("medium wait to go to pop up");
						let annualTextBox: ElementFinder = await element(by.xpath("//label[text()='Annual']/following-sibling::input"));
						let AnnualTextBoxColor = await annualTextBox.getCssValue("background-color");
						let licenceTextBox: ElementFinder = await element(by.xpath("//label[text()='License']/following-sibling::input"));
						let licenceTextBoxColor = await licenceTextBox.getCssValue("background-color");
						let physicalTextBox: ElementFinder = await element(by.xpath("//label[text()='Physical']/following-sibling::input"));
						let physicalTextBoxColor = await physicalTextBox.getCssValue("background-color");
						await console.log("AnnualTextBoxColor :" + AnnualTextBoxColor);
						await console.log("licenceTextBoxColor :" + licenceTextBoxColor);
						await console.log("physicalTextBoxColor :" + physicalTextBoxColor);

						if (AnnualTextBoxColor === "rgba(255, 85, 85, 1)" || licenceTextBoxColor === "rgba(255, 85, 85, 1)" || physicalTextBoxColor === "rgba(255, 85, 85, 1)") {
							await browser.close();
							await this.actions.mediumWait("Wait to return to main window");
							await this.actions.selectWindow(1, 'Back to main window');

						}
						else {
							let alphaText = await element(by.xpath("//label[text()='Driver 1']/following-sibling::a/span")).getText();
							console.log("alphaText :" + alphaText);
							await browser.close();
							await this.actions.mediumWait("Wait to return to main window");
							await this.actions.selectWindow(1, 'Back to main window');
							return alphaText;
						}

					}

				}
			} while (await this.pagination());

			return undefined;

		} catch (e) {
			console.log("error in get cell value function" + e);
		}

	}
	public async selectTodaysDate(date) {
		await this.actions.click(element(by.xpath("")), "selected date " + date + " in calender ");
	}

	public async futureDate(daysToAdd: any) {
		let newdate = new Date();
		newdate.setDate(newdate.getDate() + daysToAdd);
		let newmonth = Number(newdate.getUTCMonth()) + 1;
		let  currentDate= newdate.getUTCDate();
		let month;
		let date;
		if(newmonth<10){
			month='0'+newmonth.toString();
		}
		else {
			month=newmonth
		}
		if(currentDate<10){
			date='0'+currentDate.toString();
		}
		else {
			date=currentDate
		}
		let requiredDate = (month + '/' + date + '/' + newdate.getUTCFullYear())
		return requiredDate;
		
	};

	/* async db2queryHandler(conn_String: string, sql_Query: string, return_Data: boolean) {
		try {
			let conn = await ibmdb.open("Driver={IBM DB2 ODBC DRIVER};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035");
			let data = await conn.query(sql_Query);
			console.log("data : " + (JSON.stringify(data[0])));
			await conn.close();
			if (await return_Data) {
				return JSON.stringify(data);
			}
		} catch (e) {
			console.log(e);

		}
	} */
	/* 
		async mssqlqueryHandler(conn_String: any, sql_Query: string, return_Data: boolean) {
			try {
				const pool = new sql.Connection(conn_String);
				await pool.connect();
				const request = new sql.Request(pool);
				let result = await request.query(sql_Query);
				console.log("data : " + (JSON.stringify(result)));
				await pool.close();
				if (await return_Data) {
					return JSON.stringify(result);
				}
			} catch (err) {
				console.error(err)
			}
	
		} */

	async DBQueryHandler(DBName: string, conn_String: any, sql_Query: string, return_Data: boolean) {
		let result: any;
		switch (DBName.toLowerCase()) {

			case 'db2':
				try {
					console.log("inside db2");
					//	let conn = await ibmdb.open("Driver={IBM DB2 ODBC DRIVER};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035");
					let conn = await ibmdb.open(conn_String);
					result = await conn.query(sql_Query);
					await conn.close();

				} catch (e) {
					console.log(e);
				}
				break;
			case 'mssql':
				try {
					console.log("inside mssql");
					const conn = new sql.Connection(conn_String);
					await conn.connect();
					const request = new sql.Request(conn);
					result = await request.query(sql_Query);
					await conn.close();

				} catch (err) {
					console.error(err)
				}
				break;
		}
		try {
			if (await return_Data) {
				return JSON.stringify(result);
			}
		} catch (e) { console.log(e) };

	}

	public async getCellValueOfEOM(text1: string, columnName1: string, text2: string, coumnName2: string, requiredColumnHeader: string, ) {
		let requiredElementText: string;
		let columnIndex1: number = await this.getColumnIndexEOM("frmOrderListing:lOrderListingTable", columnName1);
		console.log("columnIndex1", columnIndex1);
		let columnIndex2: number = await this.getColumnIndexEOM("frmOrderListing:lOrderListingTable", coumnName2);
		console.log("columnIndex2", columnIndex2);
		let requiredColumIndex: number = await this.getColumnIndexEOM("frmOrderListing:lOrderListingTable", requiredColumnHeader);
		console.log("requiredColumIndex", requiredColumIndex);
		let myXpath = "//table[@id='frmOrderListing:lOrderListingTable']//tbody//tr" +
			"//td[" + columnIndex1 + "]//span[contains(.,'" + text1 + "')]" +
			"/parent::td//parent::tr//td[" + columnIndex2 + "]//span[contains(.,'" + text2 + "')]" +
			"/parent::td//parent::tr//td[" + requiredColumIndex + "]//span//a[1]";

		console.log("myXpath", myXpath);
		await element(By.xpath(myXpath)).click();

	}

	public async getColumnIndexEOM(tableid: string, columnName: string) {
		let tblIndex: number = 0;
		let flag: boolean = true;
		try {
			let tableHeaders: ElementArrayFinder = element.all(By.xpath("//*[@id='" + tableid + "']//thead//td"));
			let tableHeadersCount = await tableHeaders.count();
			for (let i: number = 0; i < tableHeadersCount; i++) {
				let tableHeaderText = await tableHeaders.get(i).getText();
				await console.log("Column Text: " + tableHeaderText)
				if (tableHeaderText === columnName) {
					await console.log("index" + i);
					tblIndex = i;
					break;
				}
			}
		} catch (e) {
			console.log("error" + e);
		}
		return await tblIndex + 1;
	}

	public async getColumnIndexForSingleHeaderText(tableid: string, header1: string) {
		let tblIndex: number = 0;
		let flag: boolean = true;
		var chk1: string;
		try {
			let tableHeaders: ElementArrayFinder = element.all(By.xpath("//table[@id='form:" + tableid + "']//th"));
			let tableHeadersCount = await tableHeaders.count();
			for (let i: number = 1; i < tableHeadersCount; i++) {
				chk1 = await element(By.xpath("//table[@id='form:" + tableid + "']//tr[1]//th[" + i + "]")).getText();
				if (chk1 == header1) {
					tblIndex = i;
					console.log("tblIndex", tblIndex);
					break;
				}
			}
		}
		catch (error) {
			console.log("error" + error);
		}

		return await tblIndex;
	}

	public async getMultiHeaderTableIndex(tableid: string, header1: string, header2: string) {
		let tblIndex: number = 0;
		let flag: boolean = true;
		var chk1: string;
		var chk2: string;
		try {
			let tableHeaders: ElementArrayFinder = element.all(By.xpath("//table[@id='form:" + tableid + "']//th"));
			let tableHeadersCount = await tableHeaders.count();
			for (let i: number = 1; i < tableHeadersCount; i++) {
				chk1 = await element(By.xpath("//table[@id='form:results']//tr[1]//th[" + i + "]")).getText();
				chk2 = await element(By.xpath("//table[@id='form:results']//tr[2]//th[" + i + "]")).getText();
				if (chk1 == header1 && chk2 == header2) {
					tblIndex = i;
					console.log("tblIndex", tblIndex);
					break;
				}
			}
		}
		catch (e) {
			console.log("error" + e);
		}

		return await tblIndex;
	}
}

