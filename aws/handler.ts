"use strict";
const errors = require("./errors");
const puppeteer = require("puppeteer");

interface getModulesEvent {
	department: string,
	academicYear: string,
	campus: string
};

module.exports.getModules = async (event: getModulesEvent) => {
	console.info(`Received Event: ${JSON.stringify(event)}`);

	//const moduleDirectoryBaseUrl = process.env.MODUlE_DIRECTORY_BASE_URL;
	const moduleDirectoryBaseUrl = "https://www1.essex.ac.uk/modules/";

	if (!event.department) {
		throw new errors.ArgumentNullException("event.department");
	}

	if (!event.academicYear) {
		throw new errors.ArgumentNullException("event.academicYear");
	}

	if (!event.campus) {
		throw new errors.ArgumentNullException("event.campus");
	}
	
	const departmentSelector = "#ContentMain_ddDepartment";
	const academicYearSelector = "#ContentMain_ddAcademicYear";
	const campusSelector = "#ContentMain_ddCampus";
	const searchButtonSelector = "#ContentMain_btnSearch";

	console.log(`Navigating to: ${moduleDirectoryBaseUrl}`);

	const VIEWPORT = { width: 1920, height: 1080 };
	const browser = await puppeteer.launch({headless: true, defaultViewport: VIEWPORT});
	const page = await browser.newPage();
	await page.goto(moduleDirectoryBaseUrl);

	console.log(`Navigating to modules page for deparment: ${event.department}`);

	await page.select(departmentSelector, event.department);
	await page.waitFor(2000);
	await page.select(academicYearSelector, event.academicYear);
	await page.waitFor(2000);
	await page.select(campusSelector, event.campus);
	await page.waitFor(2000);
	await Promise.all([
		page.waitForNavigation(),
		page.click(searchButtonSelector)
	]);
	
	console.log(`Retrieving Modules from page: ${page.url()}`);

	const modules = await page.evaluate(() => {
		const moduleCodeSelector = 'td[data-label="Module Code"]';
		const moduleTitleSelector = 'td[data-label="Title"]';

		const moduleCodes = Array.from(document.querySelectorAll(moduleCodeSelector));
		const moduleTitles = Array.from(document.querySelectorAll(moduleTitleSelector)).map(m => m.querySelector("a"));

		let modules = [];
		moduleCodes.forEach((moduleCode, i) => {
			modules.push({
				moduleCode: moduleCode.textContent,
				moduleTitle: moduleTitles[i].textContent,
				url: moduleTitles[i].href
			});
		});

		return modules;
	});

	console.log("Closing Browser Connection");
	await browser.close();

	console.log(`Returned Module Data: ${JSON.stringify(modules)}`);
	return modules;
};
