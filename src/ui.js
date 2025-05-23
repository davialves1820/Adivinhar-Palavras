import { Game } from "./game.js";

// Função que reseta as cores do teclado e do tabuleiro, usada ao iniciar ou reiniciar o jogo
export function reset_colors() {

    // Reseta a cor de fundo de todas as teclas do teclado virtual para a cor cinza claro padrão
    Game.keyboard.querySelectorAll(".letter").forEach(btn => {
        btn.style.backgroundColor = "var(--keyboard-gray-light)";
    });

    // Limpa todas as caixas/letras do tabuleiro, removendo a cor de fundo e o conteúdo textual
    Game.board.querySelectorAll(".letter").forEach(box => {
        box.style.backgroundColor = "var(--bg)";
        box.textContent = "";
    });
}

// Função que exibe uma mensagem de vitória utilizando a biblioteca Toastify
export function show_win_message() {

    // Exibe um toast (notificação temporária) com mensagem de vitória
    Toastify({
        text: "🎉 Parabéns! Você ganhou!",
        duration: 10000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();

    // Exibe o botão de "Jogar novamente"
    document.querySelector(".btn-play-again").style.display = "block";
}

// Função que exibe uma mensagem de derrota utilizando Toastify
export function show_lose_message() {
    
    // Exibe um toast com mensagem de derrota, incluindo a palavra correta
    Toastify({
        text: `💀 Você perdeu o jogo! A palavra era ${Game.word}`,
        duration: 10000,
        gravity: "top",
        position: "center",
        backgroundColor: "#ff4d4d",
    }).showToast();

    // Exibe o botão de "Jogar novamente"
    document.querySelector(".btn-play-again").style.display = "block";
}
