// 1. Display student details using different data types.
const studentName = "Aarav Sharma";
const rollNumber = 101;
const branch = "Computer Science";
const marks = [85, 92, 78];

console.log("Student Details");
console.log("Name:", studentName);
console.log("Roll Number:", rollNumber);
console.log("Branch:", branch);
console.log("Marks:", marks);

// 2. Simple calculator using prompt() for input.
const firstInput = prompt("Calculator: enter the first number:");
const secondInput = prompt("Calculator: enter the second number:");
const firstNumber = Number(firstInput);
const secondNumber = Number(secondInput);

if (
  firstInput !== null &&
  secondInput !== null &&
  firstInput.trim() !== "" &&
  secondInput.trim() !== "" &&
  Number.isFinite(firstNumber) &&
  Number.isFinite(secondNumber)
) {
  console.log("Addition:", firstNumber + secondNumber);
  console.log("Subtraction:", firstNumber - secondNumber);
  console.log("Multiplication:", firstNumber * secondNumber);

  if (secondNumber !== 0) {
    console.log("Division:", firstNumber / secondNumber);
  } else {
    console.log("Division: cannot divide by zero.");
  }
} else {
  console.log("Calculator: please enter two valid numbers.");
}

// 3. Check whether a number is even or odd.
const evenOddInput = prompt("Enter a number to check whether it is even or odd:");
const evenOddNumber = Number(evenOddInput);

if (
  evenOddInput !== null &&
  evenOddInput.trim() !== "" &&
  Number.isFinite(evenOddNumber)
) {
  if (evenOddNumber % 2 === 0) {
    alert(evenOddNumber + " is even.");
  } else {
    alert(evenOddNumber + " is odd.");
  }
} else {
  alert("Please enter a valid number.");
}

// 4. Grade marks entered by the user.
const marksInput = prompt("Enter student marks (0 to 100):");
const studentMarks = Number(marksInput);

if (
  marksInput === null ||
  marksInput.trim() === "" ||
  !Number.isFinite(studentMarks) ||
  studentMarks < 0 ||
  studentMarks > 100
) {
  console.log("Please enter valid marks between 0 and 100.");
} else if (studentMarks >= 90) {
  console.log("Grade: A");
} else if (studentMarks >= 75) {
  console.log("Grade: B");
} else if (studentMarks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

// 5. Print even numbers from 1 to 20.
console.log("Even numbers from 1 to 20:");
for (let number = 1; number <= 20; number += 1) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// 6. Calculate the area of a rectangle.
function calculateArea(length, width) {
  return length * width;
}

const rectangleArea = calculateArea(8, 5);
console.log("Rectangle area:", rectangleArea);

// 7. Manage a list of fruits.
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.push("Pineapple");
fruits.pop();
console.log("Final fruit list:", fruits);

// 8. Create a student object and display its values with dot notation.
const student = {
  name: "Aarav Sharma",
  age: 20,
  course: "JavaScript",
  marks: 85,
};

console.log("Student object details");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("Marks:", student.marks);

// 9 and 10. Add the interactive examples to the webpage.
function addInteractiveExamples() {
  const examples = document.createElement("section");
  examples.innerHTML = `
    <h2>9. Button Event</h2>
    <button id="messageButton" type="button">Show message</button>
    <p id="messageText">Click the button to display a message.</p>

    <h2>10. Login Validation</h2>
    <form id="loginForm">
      <label>
        Username:
        <input id="username" name="username" type="text" required>
      </label>
      <br>
      <label>
        Password:
        <input id="password" name="password" type="password" required>
      </label>
      <br>
      <button type="submit">Log in</button>
    </form>
    <p id="loginMessage" aria-live="polite"></p>
  `;
  document.body.appendChild(examples);

  const messageButton = document.getElementById("messageButton");
  const messageText = document.getElementById("messageText");
  messageButton.addEventListener("click", function () {
    messageText.textContent = "The button was clicked!";
  });

  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "student" && password === "1234") {
      loginMessage.textContent = "Login Successful";
    } else {
      loginMessage.textContent = "Invalid Username/Password";
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addInteractiveExamples);
} else {
  addInteractiveExamples();
}