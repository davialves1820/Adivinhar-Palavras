
// Objeto que representa o estado atual do jogo
const Game = {
    letter_number: 1,  // Controla a posição da letra na linha atual (1 a 5)
    row_number: 1,     // Controla qual linha do tabuleiro está sendo preenchida (1 a 6)
    palavra: "",       // Palavra secreta que o jogador precisa adivinhar
    board: document.querySelector(".board-game"), // Referência ao tabuleiro do jogo

    // Reinicia a posição da letra e avança para a próxima linha após tentativa
    resetLine() {
        this.letter_number = 1;
        this.row_number++;
    }
};

// Busca a lista de palavras do arquivo JSON local
async function fetch_words() {
    
    const data = await fetch("./src/banco_palavras.json"); // Lê o arquivo JSON
    const { words } = await data.json(); // Extrai o array "words" do JSON
    return words; // Retorna a lista de palavras
}

// Seleciona uma palavra aleatória do banco de palavras
function get_random_word(words) {
    return words[Math.floor(Math.random() * words.length)];
}

// Insere uma letra na posição correta da linha atual
function put_letter(letter) {

    // Verifica se ainda há espaço na linha atual
    if (Game.row_number <= 6 && Game.letter_number <= 5) {
        
        const row = Game.board.querySelector(`.row.row-${Game.row_number}`); // Seleciona a linha atual
        const letter_box = row.querySelector(`.letter.letter-${Game.letter_number}`); // Seleciona a caixa onde a letra será colocada
        letter_box.textContent = letter; // Coloca a letra na caixa
        Game.letter_number++; // Avança para a próxima posição da linha
    }
}

// Remove a última letra digitada da linha atual
function delete_letter() {

    // Verifica se a primeira caixa não é vazia
    if (Game.letter_number > 1) {

        Game.letter_number--; // Volta uma posição
        const row = Game.board.querySelector(`.row.row-${Game.row_number}`); // Seleciona a linha atual
        const letter_box = row.querySelector(`.letter.letter-${Game.letter_number}`); // Seleciona a caixa da letra a ser apagada
        letter_box.textContent = ""; // Limpa o conteúdo da caixa
    }
}

// Verifica se a palavra digitada é igual à palavra secreta e aplica as cores
function test_word() {

    // Verifica se a linha foi completamente preenchida (5 letras)
    if (Game.letter_number === 6) { 
        
        const row = Game.board.querySelector(`.row.row-${Game.row_number}`);
        let acertos = 0; // Contador de letras corretas na posição certa

        for (let i = 0; i < 5; i++) {

            const letter = row.querySelector(`.letter.letter-${i + 1}`); // Pega cada letra da linha
            const letraDigitada = letter.textContent.toUpperCase(); // Letra inserida pelo jogador
            const letraCorreta = Game.palavra[i].toUpperCase(); // Letra correta da palavra secreta

            if (letraDigitada === letraCorreta) { // Letra correta e na posição correta
                
                acertos++;
                letter.style.backgroundColor = "var(--letter-green-bg)";
            } else if (Game.palavra.toUpperCase().includes(letraDigitada)) { // Letra existe na palavra, mas na posição errada
                
                letter.style.backgroundColor = "var(--letter-yellow-bg)";
            } else {// Letra não existe na palavra
                
                letter.style.backgroundColor = "var(--letter-gray-bg)";
            }
        }

        if (acertos === 5) {

            Toastify({
                text: "🎉 Parabéns! Você ganhou!",
                duration: 3000,
                gravity: "top", // top ou bottom
                position: "center", // left, center ou right
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                }).showToast();

            return;
        }

        Game.resetLine(); // Avança para a próxima linha
    }

    if (Game.row_number > 6) {
        Toastify({
            text: `💀 Você perdeu o jogo! A palavra era ${Game.palavra}`,
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#ff4d4d",
        }).showToast();
    }
}

// Adiciona os ouvintes de eventos para o teclado virtual e botões de ação
function setupEventListeners() {

    // Adiciona evento para cada letra do teclado virtual
    document.querySelectorAll(".keyboard .letter").forEach(btn => {
        btn.addEventListener("click", () => put_letter(btn.textContent));
    });

    // Botão de "Enter" (envia a tentativa)
    document.querySelector(".action.enter").addEventListener("click", test_word);

    // Botão de "Apagar" (remove última letra)
    document.querySelector(".action.erase").addEventListener("click", delete_letter);
}

// Função principal para iniciar o jogo
async function start() {

    const database = await fetch_words(); // Carrega as palavras
    Game.palavra = get_random_word(database); // Escolhe uma aleatória
    setupEventListeners(); // Ativa os eventos de teclado e botões
}

// Aguarda o carregamento do DOM antes de iniciar o jogo
window.onload = start;
