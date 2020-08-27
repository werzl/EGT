const handler = require("./handler");

describe("handler.js", () => {
    describe("event", () => {
        it("returns_correct_message", async () => {
            // Arrange
            const event = {
                message: "correct-message"
            };

            // Act
            const result = await handler.hello(event);
            const expectedResult = "test-correct-message";

            // Assert
            expect(result).toEqual(expectedResult);
        });
    });
});