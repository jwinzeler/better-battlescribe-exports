class ButtonManager {
    constructor(buttonConfig) {
        this.buttons = buttonConfig.map(config => ({
            button: document.getElementById(config.buttonId),
            toggleElement: document.getElementById(config.toggleElementId)
        }));

        this.buttons.forEach(config => {
            if (config.button && config.toggleElement) {
                config.button.addEventListener('click', () => this.handleButtonClick(config.toggleElement));
            }
        });
    }

    handleButtonClick(toggleElement) {
        toggleElement.classList.toggle('hidden');
        if (toggleElement.id === 'setting-container') {
            document.getElementById('settings').classList.toggle('open');
        }
    }
}