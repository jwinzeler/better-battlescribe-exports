class Logger {
  static writeToElement(message) {
    const logElement = document.getElementById('log');
    if (logElement) {
      const existingLog = logElement.innerHTML;
      logElement.innerHTML = message.concat(existingLog ? '<br />' : '', existingLog);
    }
  }

  static logRosterValue(message) {
    const maxCharacters = 100;
    if (message.split('').length > maxCharacters) {
      message = message.split('').splice(0, 150).join('') + '...';
    }
    Logger.writeToElement(`<span class="log">>&nbsp;&nbsp;&nbsp;&nbsp;${message}</span>`);
  }

  static log(message) {
    Logger.writeToElement(`<span class="log">${message}</span>`);
  }

  static warn(message) {
    Logger.writeToElement(`<span class="warn">${message}</span>`);
  }

  static error(message) {
    Logger.writeToElement(`<span class="error">${message}</span>`);
  }
}