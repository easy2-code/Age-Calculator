document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1;
  const year = parseInt(document.getElementById("year").value);
  const result = document.getElementById("result");

  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (birthDate > today) {
    typeText(result, "Birth date cannot be in the future!");
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  const message = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
  typeText(result, message);
});

function typeText(element, text) {
  element.innerHTML = "";
  let i = 0;
  const speed = 40;

  function typeChar() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    }
  }

  typeChar();
}

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("result").innerHTML = "Your age will appear here...";
});
