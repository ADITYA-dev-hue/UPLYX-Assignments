function getArrayStatistics(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new RangeError("Enter at least one number.");
    }

    if (!numbers.every(Number.isFinite)) {
        throw new TypeError("The array must contain only finite numbers.");
    }

    const sum = numbers.reduce((total, number) => total + number, 0);

    return {
        maximum: Math.max(...numbers),
        minimum: Math.min(...numbers),
        average: sum / numbers.length
    };
}

const arithmeticForm = document.querySelector("#arithmetic-form");
const arithmeticResult = document.querySelector("#arithmetic-result");

arithmeticForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstNumber = Number(document.querySelector("#first-number").value);
    const secondNumber = Number(document.querySelector("#second-number").value);
    const division = secondNumber === 0
        ? "undefined (cannot divide by zero)"
        : firstNumber / secondNumber;
    const remainder = secondNumber === 0
        ? "undefined (cannot divide by zero)"
        : firstNumber % secondNumber;

    arithmeticResult.textContent = [
        `Addition: ${firstNumber + secondNumber}`,
        `Subtraction: ${firstNumber - secondNumber}`,
        `Multiplication: ${firstNumber * secondNumber}`,
        `Division: ${division}`,
        `Remainder: ${remainder}`
    ].join("\n");
});

const numberForm = document.querySelector("#number-form");
const numberResult = document.querySelector("#number-result");

numberForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const number = Number(document.querySelector("#checked-number").value);
    let sign;

    if (number > 0) {
        sign = "Positive";
    } else if (number < 0) {
        sign = "Negative";
    } else {
        sign = "Zero";
    }

    const parity = Number.isInteger(number)
        ? (number % 2 === 0 ? "Even" : "Odd")
        : "Even or odd only applies to integers";

    numberResult.textContent = `${sign}; ${parity}.`;
});

const statisticsForm = document.querySelector("#statistics-form");
const statisticsInput = document.querySelector("#array-numbers");
const statisticsResult = document.querySelector("#statistics-result");

statisticsForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const entries = statisticsInput.value.split(",").map((entry) => entry.trim());
    const numbers = entries.map(Number);

    if (entries.some((entry) => entry === "") || !numbers.every(Number.isFinite)) {
        statisticsResult.textContent = "Enter one or more valid numbers separated by commas.";
        return;
    }

    const { maximum, minimum, average } = getArrayStatistics(numbers);
    statisticsResult.textContent =
        `Maximum: ${maximum}\nMinimum: ${minimum}\nAverage: ${average}`;
});

const changePageButton = document.querySelector("#change-page");

changePageButton.addEventListener("click", () => {
    document.querySelector("#message").textContent = "The paragraph text has changed!";
    document.body.style.backgroundColor = "#e8f4ff";
});

const registrationForm = document.querySelector("#registration-form");
const registrationResult = document.querySelector("#registration-result");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const errors = [];

    if (name === "") {
        errors.push("Name should not be empty.");
    }

    if (!email.includes("@")) {
        errors.push("Email should contain @.");
    }

    if (password.length < 8) {
        errors.push("Password should have at least 8 characters.");
    }

    registrationResult.textContent = errors.length > 0
        ? errors.join(" ")
        : "Registration form is valid.";
});