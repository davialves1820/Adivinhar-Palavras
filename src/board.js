import { Game } from "./game.js";

// Função responsável por inserir uma letra no tabuleiro
export function put_letter(letter) {
    
    // Verifica se ainda há espaço na linha atual (máximo de 5 letras e 6 tentativas)
    if (Game.row_number <= 6 && Game.letter_number <= 5) {

        // Seleciona a linha atual com base no número da tentativa
        const row = Game.board.querySelector(`.row.row-${Game.row_number}`);

        // Seleciona a "caixa" correspondente à posição atual na linha
        const box = row.querySelector(`.letter.letter-${Game.letter_number}`);
        
        // Insere a letra na caixa
        box.textContent = letter;

        // Avança para a próxima posição na linha
        Game.letter_number++;
    }
}

// Função responsável por apagar a última letra digitada
export function delete_letter() {

    // Verifica se há letras para apagar (evita apagar fora dos limites)
    if (Game.letter_number > 1) {

        // Volta uma posição
        Game.letter_number--;

        // Seleciona a linha atual do tabuleiro
        const row = Game.board.querySelector(`.row.row-${Game.row_number}`);

        // Seleciona a caixa que será "apagada"
        const box = row.querySelector(`.letter.letter-${Game.letter_number}`);

        // Remove o conteúdo da caixa
        box.textContent = "";
    }
}
