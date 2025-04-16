const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const emptyEntry = (e) => {
  e.preventDefault();
  if (userInput.value.trim() === "") {
  alert("Please provide a phone number");
}
}
checkBtn.addEventListener('click', emptyEntry);

let resultsDiv = document.getElementById("results-div");
const clearEntry = (e) => {
  e.preventDefault();
  resultsDiv.innerHTML = "";
}
clearBtn.addEventListener('click', clearEntry);

const checkEntry = () => {
  const phoneNumber = userInput.value.trim();
  const validRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

  if (validRegex.test(phoneNumber)) {
    resultsDiv.innerHTML = `Valid US number: ${phoneNumber}`;
  } else {
    resultsDiv.innerHTML = `Invalid US number: ${phoneNumber}`;
  }
};

checkBtn.addEventListener('click', checkEntry);
