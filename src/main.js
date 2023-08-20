class Main {
  static run(file) {
    const roster = Interpreter.read(file);
    console.log(roster);

    const sanitizedRoster = Sanitizer.sanitize(roster);
    console.log(sanitizedRoster);
    
    const output = Builder.getOutput(sanitizedRoster);
    console.log(output);
    
    const download = document.getElementById('downloadButton');
    const blob = window.URL.createObjectURL(new Blob([output.innerHTML]), { type: "text/html"});
    download.setAttribute('href', blob);
    download.setAttribute('download', `${roster.name} actually usable.html`);

    const preview = document.getElementById('preview').contentWindow.document;
    preview.open();
    preview.write(output.innerHTML);
    preview.close();
  }
}