let data = [];

function add() {
  let subject = sub.value;
  let marks = +mark.value;

  if (!subject || marks < 0 || marks > 100) return;

  data.push(marks);
  list.innerHTML += `<li>${subject}: ${marks}</li>`;

  sub.value = "";
  mark.value = "";
}

function calc() {
  if (!data.length) return;

  let student = document.getElementById("name").value;
  if (!student) return;

  let total = data.reduce((a, b) => a + b, 0);
  let percentage = total / data.length;

  let grade =
    percentage >= 90 ? "A+" :
    percentage >= 80 ? "A"  :
    percentage >= 70 ? "B"  :
    percentage >= 60 ? "C"  :
    percentage >= 40 ? "D"  : "Fail";

  result.innerHTML = `
    <b>${student}</b><br>
    Total: ${total}<br>
    Percentage: ${percentage.toFixed(2)}%<br>
    Grade: ${grade}
  `;

  data = [];
  list.innerHTML = "";
  sub.value = "";
  mark.value = "";
}
