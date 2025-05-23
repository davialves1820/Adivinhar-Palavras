import { put_letter, delete_letter } from "./board.js";
import { test_word } from "./keyboard.js";               
import { reset_game } from "./app.js";                   

// Função principal que configura os ouvintes de eventos (event listeners) da interface do jogo
export function setup_event_listeners() {
    
    // Para cada botão adiciona um evento que insere a letra correspondente ao tabuleiro ao ser clicado
    document.querySelectorAll(".keyboard .letter").forEach(btn => {
        btn.addEventListener("click", () => put_letter(btn.textContent));
    });

    // Adiciona um ouvinte de clique ao botão "enter" para verificar a palavra digitada
    document.querySelector(".action.enter").addEventListener("click", test_word);

    // Adiciona um ouvinte de clique ao botão "erase" para apagar a última letra inserida
    document.querySelector(".action.erase").addEventListener("click", delete_letter);

    // Adiciona um ouvinte de clique ao botão "jogar novamente" para reiniciar a partida
    document.querySelector(".btn-play-again").addEventListener("click", reset_game);
}
