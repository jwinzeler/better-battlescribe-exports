class Settings {
    static getSetting(key) {
        const value = localStorage.getItem(key);
        return value === 'true';
    }

    static setSetting(key, value) {
        localStorage.setItem(key, value ? 'true' : 'false');
    }

    static setupCheckbox(settingKey) {
        const checkbox = document.getElementById(settingKey);
        checkbox.checked = Settings.getSetting(settingKey);

        checkbox.addEventListener('change', () => {
            Settings.setSetting(settingKey, checkbox.checked);
        });
    }
}
