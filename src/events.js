import { put_letter, delete_letter } from "./board.js";
import { test_word } from "./keyboard.js";
import { reset_game } from "./app.js"; // precisa exportar resetGame em main.js

export function setup_event_listeners() {
    
    document.querySelectorAll(".keyboard .letter").forEach(btn => {
        btn.addEventListener("click", () => put_letter(btn.textContent));
    });

    document.querySelector(".action.enter").addEventListener("click", test_word);
    document.querySelector(".action.erase").addEventListener("click", delete_letter);
    document.querySelector(".btn-play-again").addEventListener("click", reset_game);
}
