// Get the date time and select elements
const dateSelect = document.getElementById('date');
const timeSelect = document.getElementById('time');
const peopleSelect = document.getElementById('people');


// Get the current date
const today = new Date();

// Create an array of the date options
const dateOptions = [];
for (let i = 0; i <= 30; i++) {
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  dateOptions.push(formattedDate);
}

// Add the date options to the select element
dateSelect.innerHTML = dateOptions.map(date => `<option value="${date}">${date}</option>`).join('');


// Create an array of the time options
const timeOptions = [];
for (let i = 11; i <= 22; i++) {
  for (let j = 0; j <= 45; j += 15) {
    const hour = i.toString().padStart(2, "0");
    const minute = j.toString().padStart(2, "0");
    const time = new Date(0, 0, 0, hour, minute);
    const formattedTime = time.toLocaleTimeString("en-US", { hour12: true });
    // Remove the :00 from the formatted time
    const timeWithoutSeconds = formattedTime.replace(/:\d{2}$/, "");
    timeOptions.push(timeWithoutSeconds);
  }
}

// Add the time options to the select element
timeSelect.innerHTML = timeOptions.map(time => `<option value="${time}">${time}</option>`).join('');

// Get the people select element

// Create an array of the people options
const peopleOptions = [];
for (let i = 1; i <= 8; i++) {
  peopleOptions.push(`${i} ${i === 1 ? 'Person' : 'People'}`);
}

// Add the people options to the select element
peopleSelect.innerHTML = peopleOptions.map(people => `<option value="${people}">${people}</option>`).join('');

// Validation function for the first form
const reservationForm = document.getElementById("reservation-form");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function() {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form fields
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  const peopleInput = document.getElementById("people");

  if (dateInput.value === "" || timeInput.value === "" || peopleInput.value === "") {
    // Display an error message
    alert("Please fill in all required fields.");
    return;
  }

  // Hide the first form
  reservationForm.style.display = "none";

  // Show the second form
  const customerInfoForm = document.getElementById("customer-info-form");
  customerInfoForm.style.display = "block";
});

// Validation function for the second form
const customerInfoForm = document.getElementById("customer-info-form");
const submitCustomerInfoBtn = document.getElementById("submit-customer-info-btn");

submitCustomerInfoBtn.addEventListener("click", function() {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form fields
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");

  if (nameInput.value === "" || phoneInput.value === "" || emailInput.value === "") {
    // Display an error message
    alert("Please fill in all required fields.");
    return;
  }

  // Hide the second form
  customerInfoForm.style.display = "none";

  // Show the success message
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";
});
