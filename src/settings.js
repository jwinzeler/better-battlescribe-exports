class Settings {
    static getSetting(key) {
        const value = localStorage.getItem(key);
        return value === 'true';
    }

    static setSetting(key, value) {
        localStorage.setItem(key, value ? 'true' : 'false');
        if (key === 'darkMode') {
            this.getDarkMode();
        }

        if (key === 'previewSetting') {
            this.getPreviewEnabled();
        }
    }

    static setupCheckbox(settingKey) {
        const checkbox = document.getElementById(settingKey);
        checkbox.checked = Settings.getSetting(settingKey);

        checkbox.addEventListener('change', () => {
            Settings.setSetting(settingKey, checkbox.checked);
        });
    }

    static getDarkMode() {
        if (this.getSetting('darkMode')) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    }

    static getPreviewEnabled() {
        if (this.getSetting('previewSetting')) {
            document.getElementById('preview-panel').classList.remove('hidden');
        } else {
            document.getElementById('preview-panel').classList.add('hidden');
        }
    }
}
