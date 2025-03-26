export const bsstyles = (currentPalette) => `
// Для файла custom-bootstrap.scss
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

$theme-colors: (
  "light":      ${currentPalette[0]},    // Светлый
  "dark":       ${currentPalette[2]},    // Тёмный/текст
  "primary":    ${currentPalette[3]},    // Основной
  "secondary":  ${currentPalette[4]},    // Вторичный
  "info":       ${currentPalette[5]},    // Info
  "success":    ${currentPalette[6]},    // Success
  "warning":    ${currentPalette[7]},    // Warning
  "danger":     ${currentPalette[8]}     // Danger
);

$white: ${currentPalette[1]}; // Фон/белый

@import "node_modules/bootstrap/scss/bootstrap";
`;
