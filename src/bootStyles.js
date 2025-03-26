export const bsstyles = (currentPalette) => `
  /* Текстовые цвета */
  .text-light { color: ${currentPalette[0]}; }
  .text-white { color: ${currentPalette[1]}; }
  .text-dark { color: ${currentPalette[2]}; }
  .text-primary { color: ${currentPalette[3]}; }
  .text-secondary { color: ${currentPalette[4]}; }
  .text-info { color: ${currentPalette[5]}; }
  .text-success { color: ${currentPalette[6]}; }
  .text-warning { color: ${currentPalette[7]}; }
  .text-danger { color: ${currentPalette[8]}; }

  /* Фоновые цвета */
  .bg-light { background-color: ${currentPalette[0]}; }
  .bg-white { background-color: ${currentPalette[1]}; }
  .bg-dark { background-color: ${currentPalette[2]}; }
  .bg-primary { background-color: ${currentPalette[3]}; }
  .bg-secondary { background-color: ${currentPalette[4]}; }
  .bg-info { background-color: ${currentPalette[5]}; }
  .bg-success { background-color: ${currentPalette[6]}; }
  .bg-warning { background-color: ${currentPalette[7]}; }
  .bg-danger { background-color: ${currentPalette[8]}; }

  /* Стили кнопок */
  .btn-primary {
    background-color: ${currentPalette[3]};
    border-color: ${currentPalette[3]};
    color: ${currentPalette[1]}; /* Белый текст для контраста */
  }
  .btn-primary:hover {
    background-color: ${adjustColor(currentPalette[3], -20)}; /* Темнее на 20% */
    border-color: ${adjustColor(currentPalette[3], -20)};
  }
  .btn-secondary {
    background-color: ${currentPalette[4]};
    border-color: ${currentPalette[4]};
    color: ${currentPalette[0]}; /* Светлый текст */
  }
  .btn-secondary:hover {
    background-color: ${adjustColor(currentPalette[4], -20)};
    border-color: ${adjustColor(currentPalette[4], -20)};
  }
  .btn-info {
    background-color: ${currentPalette[5]};
    border-color: ${currentPalette[5]};
    color: ${currentPalette[1]};
  }
  .btn-info:hover {
    background-color: ${adjustColor(currentPalette[5], -20)};
    border-color: ${adjustColor(currentPalette[5], -20)};
  }
  .btn-success {
    background-color: ${currentPalette[6]};
    border-color: ${currentPalette[6]};
    color: ${currentPalette[1]};
  }
  .btn-success:hover {
    background-color: ${adjustColor(currentPalette[6], -20)};
    border-color: ${adjustColor(currentPalette[6], -20)};
  }
  .btn-warning {
    background-color: ${currentPalette[7]};
    border-color: ${currentPalette[7]};
    color: ${currentPalette[2]}; /* Тёмный текст */
  }
  .btn-warning:hover {
    background-color: ${adjustColor(currentPalette[7], -20)};
    border-color: ${adjustColor(currentPalette[7], -20)};
  }
  .btn-danger {
    background-color: ${currentPalette[8]};
    border-color: ${currentPalette[8]};
    color: ${currentPalette[1]};
  }
  .btn-danger:hover {
    background-color: ${adjustColor(currentPalette[8], -20)};
    border-color: ${adjustColor(currentPalette[8], -20)};
  }
`;