function submitQuiz() {
  let score = 0;
  const result = document.getElementById("result");
  result.innerHTML = "";

  // Q1
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "1") score++;

  // Q2
  const q2 = document.querySelector('input[name="q2"]').value.trim().toLowerCase();
  if (q2 === "public") score++;

  // Q3
  const correctQ3 = ["firewall", "antivirus", "encryption"];
  const selectedQ3 = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(cb => cb.value);
  const isCorrectQ3 = selectedQ3.length === correctQ3.length &&
                      correctQ3.every(ans => selectedQ3.includes(ans));
  if (isCorrectQ3) score++;

  // Q4
  const q4 = document.querySelector('select[name="q4"]').value;
  if (q4 === "data-protection") score++;

  // Q5
  const q5 = document.querySelector('input[name="q5"]:checked');
  if (q5 && q5.value === "1") score++;

  result.innerHTML += `<h2>Your Score: ${score} / 5</h2>`;
  result.innerHTML += (score >= 4)
    ? `<p style="color:green;">✅ You passed!</p>`
    : `<p style="color:red;">❌ You did not pass. Review the site and try again.</p>`;
}

function resetQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("result").innerHTML = "";
}
