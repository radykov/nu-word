// /src/styles.js

const BLUE_BACKGROUND = '#039be5';
const WHITE = '#ffffff';
const BLACK = '#000000';

export const theme = {
    fonts: {
        primary: "'Segoe UI', sans-serif",
    },
    colors: {
        default: WHITE,
        correct: '#4CAF50',
        wrong: '#F44336',
        // Softer pastel rainbow gradient for "found" state
        foundGradient: 'linear-gradient(90deg, #ff9a9e, #fad0c4, #fad0c4, #a18cd1, #fbc2eb)',
        headerBackground: BLUE_BACKGROUND,
        headerText: WHITE,
        menuText: BLACK,
        menuBackground: '#e1f5fe',
        menuItemBackground: BLUE_BACKGROUND,
        menuItemText: WHITE,
        arrowEnabled: BLUE_BACKGROUND,
        arrowDisabled: '#ccc',
    },
    transitions: {
        ease: '0.3s ease-in-out',
    },
};

export const mobileView = {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '0 10px',
};
