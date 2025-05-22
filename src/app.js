import { Game } from "./game.js";
import { fetch_words, get_random_word } from "./word_manager.js";
import { reset_colors } from "./ui.js";
import { setup_event_listeners } from "./events.js";

export async function start() {

    document.querySelector(".btn-play-again").style.display = "none";
    const database = await fetch_words();
    Game.word = get_random_word(database);
    setup_event_listeners();
}

export function reset_game() {
    
    Game.reset_game_state();
    reset_colors();
    start();
}

window.onload = start;
