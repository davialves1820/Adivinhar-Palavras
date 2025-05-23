import { Game } from "./game.js";
import { fetch_words, get_random_word } from "./word_manager.js";
import { reset_colors } from "./ui.js";
import { setup_event_listeners } from "./events.js";

// Função que inicia o jogo
export async function start() {

    // Esconde o botão "Jogar novamente", caso esteja visível
    document.querySelector(".btn-play-again").style.display = "none";

    // Busca a lista de palavras (via JSON)
    const database = await fetch_words();

    // Escolhe uma palavra aleatória da base e define como a palavra secreta
    Game.word = get_random_word(database);
}

// Função chamada quando o jogador clica em "Jogar novamente"
export function reset_game() {

    // Reseta o estado do jogo (linha e letra atuais)
    Game.reset_game_state();

    // Limpa as cores do teclado e tabuleiro
    reset_colors();

    // Inicia o jogo novamente
    start();
}

// Chama a função `start()` automaticamente quando a página for carregada
window.onload = () => { 
    
    // Configura os ouvintes de eventos para os botões do teclado virtual
    setup_event_listeners();

    start();
}
