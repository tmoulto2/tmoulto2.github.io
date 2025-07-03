// This function is called when the user clicks the "Submit Quiz" button

function submitQuiz() {
  let score = 0;
  const result = document.getElementById("result");
  result.innerHTML = ""; // Clear previous result

  // Q1: Radio - Symmetric encryption uses same key
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "1") score++;

  // Q2: Fill-in-the-blank - Asymmetric uses public + private key
  const q2 = document.querySelector('input[name="q2"]').value.trim().toLowerCase();
  if (q2 === "public") score++;

  // Q3: Checkboxes - All correct security tools selected
  const correctQ3 = ["firewall", "antivirus", "encryption"];
  const selectedQ3 = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(cb => cb.value);
  const isCorrectQ3 = selectedQ3.length === correctQ3.length &&
                      correctQ3.every(ans => selectedQ3.includes(ans));
  if (isCorrectQ3) score++;

  // Q4: Dropdown - Purpose of encryption
  const q4 = document.querySelector('select[name="q4"]').value;
  if (q4 === "data-protection") score++;

  // Q5: Radio - Asymmetric uses two different keys
  const q5 = document.querySelector('input[name="q5"]:checked');
  if (q5 && q5.value === "1") score++;

  // Q6: Radio - HTTPS encrypts traffic
  const q6 = document.querySelector('input[name="q6"]:checked');
  if (q6 && q6.value === "1") score++;

  // Q7: Fill-in-the-blank - Firewall described as barrier, hardware, software, or filter
  const q7 = document.querySelector('input[name="q7"]').value.trim().toLowerCase();
  if (["barrier", "hardware", "software", "filter"].includes(q7)) score++;

  // Q8: Checkboxes - Valid firewall types
  const correctQ8 = ["packet", "stateful", "proxy"];
  const selectedQ8 = Array.from(document.querySelectorAll('input[name="q8"]:checked')).map(cb => cb.value);
  const isCorrectQ8 = selectedQ8.length === correctQ8.length &&
                      correctQ8.every(ans => selectedQ8.includes(ans));
  if (isCorrectQ8) score++;

  // Q9: Radio - Symmetric is faster
  const q9 = document.querySelector('input[name="q9"]:checked');
  if (q9 && q9.value === "1") score++;

  // Q10: Radio - Firewalls prevent unauthorized access
  const q10 = document.querySelector('input[name="q10"]:checked');
  if (q10 && q10.value === "1") score++;

  // Total Score Calculation
  const total = 10;
  result.innerHTML += `<h2>Your Score: ${score} / ${total}</h2>`;

  // Pass/fail feedback
  result.innerHTML += (score >= 7)
    ? `<p style="color:green;">✅ You passed!</p>`
    : `<p style="color:red;">❌ You did not pass. Please review the materials and try again.</p>`;
}

// Resets quiz selections and result message
function resetQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("result").innerHTML = "";
}
