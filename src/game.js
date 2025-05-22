export const Game = {
    letter_number: 1,
    row_number: 1,
    word: "",
    board: document.querySelector(".board-game"),
    keyboard: document.querySelector(".keyboard"),

    resetLine() {
        this.letter_number = 1;
        this.row_number++;
    },

    reset_game_state() {
        this.letter_number = 1;
        this.row_number = 1;
    }
};