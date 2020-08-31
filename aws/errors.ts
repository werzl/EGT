class ArgumentException extends Error {
    argument: string;

    constructor(argument: string, message: string) {
        super(`Argument is invalid: ${argument}.`);
        this.name = "ArgumentException";
        this.argument = argument;
        this.message = message;
    }
};

module.exports.ArgumentException = ArgumentException;


class ArgumentNullException extends ArgumentException {
    constructor(argument: string) {
        super(argument, `Argument must not be null: ${argument}`);
        this.name = "ArgumentNullException";
    }
}
module.exports.ArgumentNullException = ArgumentNullException;