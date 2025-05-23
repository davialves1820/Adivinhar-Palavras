// Objeto que representa o estado atual do jogo
export const Game = {
    // Número da letra que está sendo digitada (de 1 a 5 em cada linha)
    letter_number: 1,

    // Número da linha atual (tentativa), vai de 1 a 6
    row_number: 1,

    // Palavra correta que o jogador deve adivinhar (a ser preenchida no início do jogo)
    word: "",

    // Referência ao elemento HTML que representa o tabuleiro do jogo
    board: document.querySelector(".board-game"),

    // Referência ao elemento HTML que representa o teclado virtual
    keyboard: document.querySelector(".keyboard"),

    // Método que avança para a próxima linha (tentativa)
    resetLine() {
        this.letter_number = 1;
        this.row_number++;
    },

    // Método que reinicia completamente o estado do jogo
    reset_game_state() {
        this.letter_number = 1;
        this.row_number = 1;
    }
};
