
export async function fetch_words() {
    const data = await fetch("./src/banco_palavras.json");
    const { words } = await data.json();
    return words;
}

export function get_random_word(words) {
    return words[Math.floor(Math.random() * words.length)];
}
