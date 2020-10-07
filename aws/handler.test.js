import { getModules } from "./handler";

describe("getModules", () => {
    describe("event", () => {
        it("missing_department_throws_ArgumentNullException", async () => {
            // Arrange
            const event = {
                academicYear: "2020"
            };

            try {
                // Act
                await getModules(event);
            }
            catch (e) {
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
                await getModules(event);
            }
            catch (e) {
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
                await getModules(event);
            }
            catch (e) {
                // Assert
                expect(e.message).toEqual("Argument must not be null: event.campus");
            }
        });
    });

    describe("returns", () => {
        it("correct_module_data_PA", async () => {
            // Arrange
            const event = {
                department: "PA",
                academicYear: "20",
                campus: "CO"
            };

            const modules = await getModules(event);

            expect(modules[0].moduleCode).toEqual("PA108-4-SP-CO");
        }, 30000);

        it("correct_module_data_CE", async () => {
            // Arrange
            const event = {
                department: "CE",
                academicYear: "20",
                campus: "CO"
            };

            const modules = await getModules(event);

            expect(modules[0].moduleCode).toEqual("CE101-4-FY-CO");
        }, 30000);
    });
});