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
    if (message?.split('').length > maxCharacters) {
      message = message.split('').splice(0, 150).join('') + '...';
    }
    this.writeToElement(`<span class="log">>&nbsp;&nbsp;&nbsp;&nbsp;${message}</span>`);
  }

  static log(message) {
    this.writeToElement(`<span class="log">${message}</span>`);
  }

  static logArray(array) {
    array.forEach(element => {
      this.writeToElement(`<span class="log">>&nbsp;&nbsp;&nbsp;&nbsp;${JSON.stringify(element)}</span>`);
    });
  }

  static warn(message) {
    this.writeToElement(`<span class="warn">${message}</span>`);
  }

  static error(message) {
    this.writeToElement(`<span class="error">${message}</span>`);
  }
}