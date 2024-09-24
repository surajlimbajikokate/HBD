document.getElementById("surpriseButton").addEventListener("click", function() {
    let cake = document.getElementById("cakeImg");
    cake.style.display = "block";
    
    // Play the confetti animation and display the cake
    launchConfetti();
});

function launchConfetti() {
    const colors = ["#ff6f61", "#f7b42c", "#fff"];
    
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; 
        
        document.body.appendChild(confetti);

        // Remove confetti after the animation
        setTimeout(function() {
            confetti.remove();
        }, 5000);
    }
}

// Create Confetti Styles Dynamically
let style = document.createElement("style");
style.innerHTML = `
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        top: 0;
        z-index: 9999;
        animation: fall linear infinite;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);
