document.addEventListener("DOMContentLoaded", () => {
  const teamNameDisplay = document.getElementById("display-team-name");
  const logoutBtn = document.getElementById("logout-btn");

  const teamName = localStorage.getItem("eragon-team-name");

  if (teamName) {
    teamNameDisplay.textContent = teamName;
  } else {
    window.location.href = "index.html";
  }

  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.removeItem("eragon-team-name");
    localStorage.removeItem("eragon-team-code");
    localStorage.removeItem("eragon-progress");

    window.location.href = "index.html";
  });
});
