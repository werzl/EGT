const handler = require("./dist/handler");
const errors = require("./dist/errors");

describe("handler.js", () => {
    describe("event", () => {
        it("missing_department_throws_ArgumentNullException", async () => {
            // Arrange
            const event = {
                academicYear: "2020"
            };

            try {
                // Act
                await handler.getModule(event);
            }
            catch(e) {
                // Assert
                expect(e.message).toEqual("Argument must not be null: event.department");
            }
        });

        it("missing_academicYear_throws_ArgumentNullException", async () => {
            // Arrange
            const event = {
                department: "test department"
            };

            try {
                // Act
                await handler.getModule(event);
            }
            catch(e) {
                // Assert
                expect(e.message).toEqual("Argument must not be null: event.academicYear");
            }
        });

        it("missing_campus_throws_ArgumentNullException", async () => {
            // Arrange
            const event = {
                department: "test department",
                academicYear: "2020"
            };

            try {
                // Act
                await handler.getModule(event);
            }
            catch(e) {
                // Assert
                expect(e.message).toEqual("Argument must not be null: event.campus");
            }
        });
    });

    describe("getModule", () => {
        it("selects_department", async () => {
            // Arrange
            const event = {
                department: "PA",
                academicYear: "20",
                campus: "CO"
            };

            await handler.getModule(event);

        });
    });
});