const title = document.getElementById("title");
console.log(title);


menuToggle.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.addEventListener("click", function () {
        alert("Menu toggled!");
    });
});