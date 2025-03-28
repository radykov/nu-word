// /src/styles.js
export const theme = {
    fonts: {
        primary: "'Segoe UI', sans-serif",
    },
    colors: {
        default: '#ffffff',
        correct: '#4CAF50',
        wrong: '#F44336',
        // Softer pastel rainbow gradient for "found" state
        foundGradient: 'linear-gradient(90deg, #ff9a9e, #fad0c4, #fad0c4, #a18cd1, #fbc2eb)',
        headerBackground: '#039be5',
        headerText: '#ffffff',
        menuBackground: '#e1f5fe',
        menuItemBackground: '#81d4fa',
        menuItemText: '#01579b',
        arrowEnabled: '#039be5',
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
