document.getElementById("yesBtn").addEventListener("click", function() {
    document.body.innerHTML = "<h1 style='color: white; text-align: center; margin-top: 20%; font-size: 40px;'>Yay! Happy Valentine's Day ❤️</h1>";
});

document.getElementById("noBtn").addEventListener("click", function() {
    let numYesButtons = 20; // Number of extra "Yes" buttons
    for (let i = 0; i < numYesButtons; i++) {
        let yesButton = document.createElement("button");
        yesButton.innerText = "Yes";
        yesButton.className = "extra-yes";
        
        // Random position on screen
        yesButton.style.top = Math.random() * 90 + "vh";
        yesButton.style.left = Math.random() * 90 + "vw";
        
        yesButton.addEventListener("click", function() {
            document.body.innerHTML = "<h1 style='color: white; text-align: center; margin-top: 20%; font-size: 40px;'>Yay! Happy Valentine's Day ❤️</h1>";
        });

        document.body.appendChild(yesButton);
    }
});

function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.className = "heart-float";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s"; 
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}
setInterval(createFloatingHearts, 1000);
