"use strict";
const errors = require("./errors");
const puppeteer = require("puppeteer");

interface ScrapeEvent {
  department: string,
  academicYear: string,
  campus: string
};

module.exports.getModule = async (event: ScrapeEvent) => {
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

  console.info(`Scraping: ${moduleDirectoryBaseUrl}`);

  const departmentSelector = "#ContentMain_ddDepartment";
  const academicYearSelector = "#ContentMain_ddAcademicYear";
  const campusSelector = "#ContentMain_ddCampus";
  const searchButtonSelector = "#ContentMain_btnSearch";

  //TODO: Remove/comment out
  const VIEWPORT = { width: 1920, height: 1080 };
  const browser = await puppeteer.launch({ headless: false, executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe", defaultViewport: VIEWPORT });

  //const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(moduleDirectoryBaseUrl);

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

  await browser.close();

  return event.department;
};
