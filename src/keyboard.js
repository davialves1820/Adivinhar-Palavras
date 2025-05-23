import { Game } from "./game.js";
import { show_win_message, show_lose_message } from "./ui.js";

// Função para testar se a palavra digitada está correta
export function test_word() {

    // Verifica se o jogador já digitou todas as 6 letras da linha atual
    if (Game.letter_number === 6) {

        // Seleciona a linha atual do tabuleiro
        const row = Game.board.querySelector(`.row.row-${Game.row_number}`);
        let hits = 0; // Contador de letras corretas na posição correta

        // Percorre as 5 letras da palavra
        for (let i = 0; i < 5; i++) {

            // Seleciona a caixa da letra atual
            const box = row.querySelector(`.letter.letter-${i + 1}`);

            // Obtém a letra digitada e a correta, ambas em maiúsculas
            const typed = box.textContent.toUpperCase();
            const correct = Game.word[i].toUpperCase();

            // Seleciona a tecla correspondente no teclado virtual
            const keyboard_box = Game.keyboard.querySelector(`.letter.letter-${typed}`);

            // Se a letra estiver correta e na posição certa
            if (typed === correct) {
                hits++; // Conta um acerto
                box.style.backgroundColor = "var(--letter-green-bg)";
                keyboard_box.style.backgroundColor = "var(--letter-green-bg)";
            }
            // Se a letra estiver na palavra, mas em posição errada
            else if (Game.word.toUpperCase().includes(typed)) {
                box.style.backgroundColor = "var(--letter-yellow-bg)";
                keyboard_box.style.backgroundColor = "var(--letter-yellow-bg)";
            }
            // Se a letra não estiver na palavra
            else {
                box.style.backgroundColor = "var(--letter-gray-bg)";
                keyboard_box.style.backgroundColor = "var(--letter-gray-bg)";
            }
        }

        // Se todas as 5 letras estão corretas, o jogador venceu
        if (hits === 5) {
            show_win_message(); // Mostra mensagem de vitória
            return; // Encerra a função
        }

        // Caso não tenha vencido, passa para a próxima linha (tentativa)
        Game.resetLine();
    }

    // Se o jogador já usou mais de 6 linhas (tentativas), ele perdeu
    if (Game.row_number > 6) {
        show_lose_message(); // Mostra mensagem de derrota
    }
}
