// JavaScript Assignment 1: arithmetic operators.
const arithmeticForm = document.getElementById("arithmeticForm");
arithmeticForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstNumber = Number(document.getElementById("firstNumber").value);
  const secondNumber = Number(document.getElementById("secondNumber").value);
  const results = [
    `Addition: ${firstNumber + secondNumber}`,
    `Subtraction: ${firstNumber - secondNumber}`,
    `Multiplication: ${firstNumber * secondNumber}`,
    secondNumber === 0
      ? "Division: cannot divide by zero."
      : `Division: ${firstNumber / secondNumber}`,
    `Remainder: ${
      secondNumber === 0 ? "cannot divide by zero." : firstNumber % secondNumber
    }`,
  ];

  document.getElementById("arithmeticResult").textContent = results.join("\n");
});

// JavaScript Assignment 2: number classification.
const numberCheckForm = document.getElementById("numberCheckForm");
numberCheckForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const number = Number(document.getElementById("numberToCheck").value);
  const sign = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
  const parity = number % 2 === 0 ? "Even" : "Odd";

  document.getElementById("numberCheckResult").textContent =
    `${sign}; ${parity}`;
});

// JavaScript Assignment 3: array statistics.
function calculateStatistics(numbers) {
  if (numbers.length === 0) {
    throw new Error("Enter at least one number.");
  }

  const sum = numbers.reduce((total, number) => total + number, 0);
  return {
    maximum: Math.max(...numbers),
    minimum: Math.min(...numbers),
    average: sum / numbers.length,
  };
}

const statisticsForm = document.getElementById("statisticsForm");
statisticsForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("numbersInput").value.trim();
  const numbers = input
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value !== "")
    .map(Number);
  const result = document.getElementById("statisticsResult");

  if (numbers.length === 0 || numbers.some((number) => !Number.isFinite(number))) {
    result.textContent = "Enter one or more valid numbers separated by commas.";
    return;
  }

  const statistics = calculateStatistics(numbers);
  result.textContent =
    `Maximum: ${statistics.maximum}\n` +
    `Minimum: ${statistics.minimum}\n` +
    `Average: ${statistics.average}`;
});

// JavaScript Assignment 4: DOM manipulation.
document.getElementById("changePageButton").addEventListener("click", function () {
  document.getElementById("domParagraph").textContent =
    "The paragraph text has changed!";
  document.body.style.backgroundColor = "#e8f4ff";
});

// JavaScript Assignment 5: registration form validation.
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("registrationName").value.trim();
  const email = document.getElementById("registrationEmail").value.trim();
  const password = document.getElementById("registrationPassword").value;
  const result = document.getElementById("registrationResult");

  if (!name) {
    result.textContent = "Name should not be empty.";
  } else if (!email.includes("@")) {
    result.textContent = "Email should contain @.";
  } else if (password.length < 8) {
    result.textContent = "Password should have at least 8 characters.";
  } else {
    result.textContent = "Registration details are valid.";
  }
});

// jQuery Assignment 1: selectors and events.
$(".hide-paragraphs").on("click", function () {
  $(".selector-paragraph").hide();
});

$(".show-paragraphs").on("click", function () {
  $(".selector-paragraph").show();
});

$(".selector-paragraph").on("click", function () {
  $(this).css("color", "#c0392b");
});

// jQuery Assignment 2: effects.
$("#fadeInButton").on("click", function () {
  $("#effectsBox").fadeIn();
});

$("#fadeOutButton").on("click", function () {
  $("#effectsBox").fadeOut();
});

$("#slideUpButton").on("click", function () {
  $("#effectsBox").slideUp();
});

$("#slideDownButton").on("click", function () {
  $("#effectsBox").slideDown();
});

// jQuery Assignment 3: form handling.
$("#studentForm").on("submit", function (event) {
  event.preventDefault();

  const name = $("#studentName").val().trim();
  const course = $("#studentCourse").val().trim();
  const phone = $("#studentPhone").val().trim();
  const studentDetails = $("<p>").text(
    `Name: ${name} | Course: ${course} | Phone Number: ${phone}`
  );

  $("#studentDetails").append(studentDetails);
  this.reset();
});

// jQuery Assignment 4: list manipulation.
$("#addItemButton").on("click", function () {
  const itemName = $("#newItem").val().trim();
  if (itemName) {
    $("#itemList").append($("<li>").text(itemName));
    $("#newItem").val("");
  }
});

$("#removeItemButton").on("click", function () {
  $("#itemList li").last().remove();
});

$("#changeItemButton").on("click", function () {
  const firstItem = $("#itemList li").first();
  if (firstItem.length) {
    firstItem.text("Item text changed");
  }
});

// jQuery Assignment 5: class and CSS manipulation.
$("#styleParagraphButton").on("click", function () {
  const paragraph = $("#styleParagraph");
  const isActive = paragraph.toggleClass("highlighted").hasClass("highlighted");

  paragraph.css({
    "font-size": isActive ? "1.25rem" : "1rem",
    color: isActive ? "#17324d" : "#222",
    backgroundColor: isActive ? "#ffe08a" : "transparent",
  });
});