export const bsstyles = (currentPalette) =>`
    .text-light { color: ${currentPalette[0]}; }
    .text-white { color: ${currentPalette[1]}; }
    .text-dark { color: ${currentPalette[2]}; }
    .text-primary { color: ${currentPalette[3]}; }
    .text-secondary { color: ${currentPalette[4]}; }
    .text-info { color: ${currentPalette[5]} !important; }
    .bg-light { background-color: ${currentPalette[0]}; }
    .bg-white { background-color: ${currentPalette[1]}; }
    .bg-dark { background-color: ${currentPalette[2]}; }
    .bg-primary { background-color: ${currentPalette[3]}; }
    .bg-secondary { background-color: ${currentPalette[4]}; }
    .bg-info { background-color: ${currentPalette[5]}; }
  `;