# Jogo de Adivinhação de Palavras (Estilo Wordle)

Um jogo interativo no navegador onde o jogador deve adivinhar uma palavra secreta de 5 letras em até 6 tentativas. As letras digitadas mudam de cor conforme o jogador acerta ou erra suas posições — inspirado no jogo **Wordle**.

---

## 🎮 Funcionalidades

- Interface visual com tabuleiro e teclado virtual.
- Indicação visual com cores:
  - 🟩 Verde: Letra correta e na posição certa.
  - 🟨 Amarelo: Letra correta, mas na posição errada.
  - ⬜ Cinza: Letra não está na palavra.
- Mensagens animadas de vitória ou derrota.
- Botão para jogar novamente.
- Suporte a clique nas teclas virtuais.

---

## 🧠 Como jogar

1. Clique nas letras para formar uma palavra de 5 letras.
2. Pressione **Enter** (tecla virtual) para verificar.
3. Use **Apagar** para remover a última letra.
4. O jogo termina ao acertar a palavra ou após 6 tentativas.

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (com variáveis customizadas para cores)
- JavaScript (ES6+)
- Toastify.js para notificações

---

## 📁 Estrutura de arquivos

- **index.html**;
- **style.css**;
- **src/:**
  - **main.js:** Arquivo principal do jogo;
  - **game.js:** Objeto central que armazena estado do jogo;
  - **board_manager.js:** Manipula o tabuleiro;
  - **word_manager.js:** Carrega palavras e valida tentativas;
  - **event_handlers.js:** Eventos do teclado virtual;
  - **banco_palavras.json:** Banco de palavras possíveis.

---

## 🖼️ Pré-visualização

![image](https://github.com/user-attachments/assets/59dd422d-17c1-4cee-9f8f-39ad440602be)

---
