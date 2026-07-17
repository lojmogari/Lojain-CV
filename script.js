// Copy Email Button

const copyButton = document.getElementById("copyBtn");

const message = document.getElementById("message");


copyButton.addEventListener("click", function () {

    const email = "Lojain.mogari@gmail.com";

    navigator.clipboard.writeText(email);

    message.textContent = "Email copied successfully!";

    setTimeout(function () {
        
        message.textContent = "";

    }, 2000);

});

// Back To Top Button

const topButton = document.getElementById("topBtn");

// Show Button When Scrolling

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

// Scroll To Top

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});