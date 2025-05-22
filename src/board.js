import { Game } from "./game.js";

export function put_letter(letter) {

    if (Game.row_number <= 6 && Game.letter_number <= 5) {
    
        const row = Game.board.querySelector(`.row.row-${Game.row_number}`);
        const box = row.querySelector(`.letter.letter-${Game.letter_number}`);
        box.textContent = letter;
        Game.letter_number++;
    }
}

export function delete_letter() {
    
    if (Game.letter_number > 1) {
    
        Game.letter_number--;
        const row = Game.board.querySelector(`.row.row-${Game.row_number}`);
        const box = row.querySelector(`.letter.letter-${Game.letter_number}`);
        box.textContent = "";
    }
}
