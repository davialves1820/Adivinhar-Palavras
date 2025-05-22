import { Game } from "./game.js";
import { show_win_message, show_lose_message } from "./ui.js";

export function test_word() {

    if (Game.letter_number === 6) {

        const row = Game.board.querySelector(`.row.row-${Game.row_number}`);
        let hits = 0;

        for (let i = 0; i < 5; i++) {

            const box = row.querySelector(`.letter.letter-${i + 1}`);
            const typed = box.textContent.toUpperCase();
            const correct = Game.word[i].toUpperCase();
            const keyboard_box = Game.keyboard.querySelector(`.letter.letter-${typed}`);

            if (typed === correct) {

                hits++;
                box.style.backgroundColor = "var(--letter-green-bg)";
                keyboard_box.style.backgroundColor = "var(--letter-green-bg)";
            } else if (Game.word.toUpperCase().includes(typed)) {

                box.style.backgroundColor = "var(--letter-yellow-bg)";
                keyboard_box.style.backgroundColor = "var(--letter-yellow-bg)";
            } else {

                box.style.backgroundColor = "var(--letter-gray-bg)";
                keyboard_box.style.backgroundColor = "var(--letter-gray-bg)";
            }
        }

        if (hits === 5) {
            show_win_message();
            return;
        }

        Game.resetLine();
    }

    if (Game.row_number > 6) {
        show_lose_message();
    }
}
