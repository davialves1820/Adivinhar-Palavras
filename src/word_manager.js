// Função que busca uma lista de palavras
export async function fetch_words() {

    const data = await fetch("./src/banco_palavras.json");

    const { words } = await data.json(); 

    return words;
}

// Função que retorna uma palavra aleatória
export function get_random_word(words) {
    
    // Usa Math.random() para escolher um índice aleatório no array e retorna a palavra correspondente.
    return words[Math.floor(Math.random() * words.length)];
}
