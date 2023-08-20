class Main {
  static run(file) {
    const roster = Interpreter.read(file);
    console.log(roster);

    const sanitizedRoster = Sanitizer.sanitize(roster);
    console.log(sanitizedRoster);
    
    const output = Builder.getOutput(sanitizedRoster);
    console.log(output);
    
    const download = document.createElement('a');
    download.setAttribute('href', window.URL.createObjectURL(new Blob([output.innerHTML]), { type: "text/html"}));
    download.setAttribute('download', `${roster.name} actually usable.html`);
    download.click();
  }
}