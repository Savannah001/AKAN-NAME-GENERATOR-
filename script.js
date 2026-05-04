// ===== DATA =====
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const dayMeanings = [
  "Sunday-borns are believed to be bold, confident, and natural leaders.",
  "Monday-borns are known to be peaceful, calm, and nurturing souls.",
  "Tuesday-borns are said to be fiery, ambitious, and fiercely determined.",
  "Wednesday-borns are considered wise, adaptable, and excellent communicators.",
  "Thursday-borns are known for their strength, resilience, and determination.",
  "Friday-borns are believed to be adventurous, curious, and lovers of life.",
  "Saturday-borns are said to be thoughtful, grounded, and deeply connected to heritage."
];

// ===== DOM ELEMENTS =====
const form = document.getElementById('akanForm');
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const dateError = document.getElementById('dateError');
const genderError = document.getElementById('genderError');
const resultSection = document.getElementById('resultSection');
const bornDay = document.getElementById('bornDay');
const akanNameResult = document.getElementById('akanNameResult');
const meaningText = document.getElementById('meaningText');
const resetBtn = document.getElementById('resetBtn');
const card = document.querySelector('.card');

// ===== VALIDATION =====
function validateDate(day, month, year) {
  if (!day || !month || !year) return "Please fill in all date fields";

  const d = parseInt(day);
  const m = parseInt(month);
  const y = parseInt(year);

  if (isNaN(d) || isNaN(m) || isNaN(y)) return "Please enter valid numbers";
  if (y < 1 || y > 9999) return "Please enter a valid year";
  if (m < 1 || m > 12) return "Month must be between 1 and 12";

  const daysInMonth = new Date(y, m, 0).getDate();
  if (d < 1 || d > daysInMonth) return `Day must be between 1 and ${daysInMonth} for this month`;

  return null;
}

// ===== CALCULATE DAY OF WEEK =====
function calculateDayOfWeek(day, month, year) {
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return date.getDay();
}

// ===== SHOW/HIDE HELPERS =====
function showError(el) {
  el.classList.add('visible');
}

function hideError(el) {
  el.classList.remove('visible');
}

// ===== FORM SUBMISSION =====
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Reset errors
  hideError(dateError);
  hideError(genderError);

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;
  const genderEl = document.querySelector('input[name="gender"]:checked');

  let hasError = false;

  // Validate date
  const dateValidationError = validateDate(day, month, year);
  if (dateValidationError) {
    dateError.textContent = dateValidationError;
    showError(dateError);
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 500);
    hasError = true;
  }

  // Validate gender
  if (!genderEl) {
    showError(genderError);
    if (!hasError) {
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 500);
    }
    hasError = true;
  }

  if (hasError) return;

  // Calculate Akan name
  const dayIndex = calculateDayOfWeek(day, month, year);
  const gender = genderEl.value;
  const akanName = gender === 'male' ? maleAkanNames[dayIndex] : femaleAkanNames[dayIndex];
  const dayName = daysOfWeek[dayIndex];

  // Display result
  bornDay.textContent = dayName;
  akanNameResult.textContent = akanName;
  meaningText.textContent = dayMeanings[dayIndex];

  // Show result with animation
  resultSection.classList.add('visible');
  akanNameResult.classList.remove('reveal-name');
  void akanNameResult.offsetWidth;
  akanNameResult.classList.add('reveal-name');

  // Scroll to result
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
});

// ===== RESET =====
resetBtn.addEventListener('click', function() {
  form.reset();
  resultSection.classList.remove('visible');
  hideError(dateError);
  hideError(genderError);
  dayInput.focus();
});

// ===== LIVE VALIDATION FEEDBACK =====
[dayInput, monthInput, yearInput].forEach(input => {
  input.addEventListener('input', () => hideError(dateError));
});

document.querySelectorAll('input[name="gender"]').forEach(radio => {
  radio.addEventListener('change', () => hideError(genderError));
});

// Focus first input on load
dayInput.focus();