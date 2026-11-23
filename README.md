# 🧟 TWD Seasons Explorer

## 📖 Sobre o Projeto

O **TWD Seasons Explorer** é uma *landing page* interativa desenvolvida com HTML, CSS e JavaScript puro. O objetivo é apresentar de forma dinâmica e visualmente atraente um guia das temporadas da série de TV *The Walking Dead*.

O projeto se destaca por:
* **Design Híbrido:** Utiliza um carrossel de Cards (Frame 2) para navegação entre temporadas e uma visualização de Detalhes (Frame 3) com um carrossel de imagens interno responsivo (desktop com botões, mobile com *swipe*).
* **Experiência Visual:** Transições suaves de tela (*fade-in/fade-out*) e um esquema de cores inspirado na série (amarelo 'Walkers') para imersão.

***

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da página.
* **CSS3:** Estilização, layout responsivo e transições.
* **JavaScript (ES6+):** Lógica do carrossel de cards, manipulação de DOM para injeção de conteúdo (Frame 3) e lógica de navegação do carrossel de imagens.

***

## 🚀 Como Visualizar e Executar

Este projeto é totalmente *frontend* e não requer nenhuma configuração de servidor.

### 1. Clonar o Repositório

Abra seu terminal e clone o projeto.

```bash
git clone https://github.com/devpedrogo/twd_project.git
```
### 2. Navegar para o Diretório

```Bash

cd twd_project
````
### 3. Abrir a Aplicação
Basta abrir o arquivo index.html no seu navegador favorito (Chrome, Firefox, etc.).

```Bash

# Se estiver no Windows
start index.html

# Se estiver no macOS/Linux
open index.html
```
⚙️ Estrutura de Arquivos
A estrutura do projeto é simples e clara:
```
twd_project/
├── imagens/                # Todas as imagens de background e carrossel
├── index.html              # Estrutura principal da aplicação (Frames 1, 2 e 3)
├── README.md               # Este arquivo
├── script.js               # Toda a lógica de dados, carrossel e transição de telas
└── style.css               # Estilos e media queries para responsividade
```
💡 Customização
Para adicionar ou alterar o conteúdo das temporadas:

1. Abra o arquivo script.js.

2. Edite o array de objetos dadosTemporadas no topo do arquivo.

3. Você pode adicionar novos objetos, alterar os campos titulo, resumo ou atualizar os caminhos das imagens (card_image e imagens).

👨‍💻 Autor
Pedro Gouveia

GitHub: https://github.com/devpedrogo
