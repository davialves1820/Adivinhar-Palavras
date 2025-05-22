import { Game } from "./game.js";

export function reset_colors() {

    Game.keyboard.querySelectorAll(".letter").forEach(btn => {
        btn.style.backgroundColor = "var(--keyboard-gray-light)";
    });

    Game.board.querySelectorAll(".letter").forEach(box => {
        box.style.backgroundColor = "var(--bg)";
        box.textContent = "";
    });
}

export function show_win_message() {

    Toastify({
        text: "🎉 Parabéns! Você ganhou!",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
    document.querySelector(".btn-play-again").style.display = "block";
}

export function show_lose_message() {
    
    Toastify({
        text: `💀 Você perdeu o jogo! A palavra era ${Game.word}`,
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#ff4d4d",
    }).showToast();
    document.querySelector(".btn-play-again").style.display = "block";
}
