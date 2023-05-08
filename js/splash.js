
const splash= document.querySelector("#splash");
const mainContent= document.getElementById("main-content");


window.addEventListener("load", () => {
    setTimeout(() => {
      splash.style.display = "none";
      mainContent.style.display = "block";
    }, 2000);
  });