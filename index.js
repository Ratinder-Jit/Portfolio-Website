document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("colorScheme1");
    const button2 = document.getElementById("colorScheme2");
    const container = document.querySelector(".container");

    button1.addEventListener("click", function() {
        container.classList.remove("color-scheme-2");
        container.classList.add("color-scheme-1");
        alert('Color scheme changed');
    });

    button2.addEventListener("click", function() {
        container.classList.remove("color-scheme-1");
        container.classList.add("color-scheme-2");
        alert('Color scheme changed');
    });


});