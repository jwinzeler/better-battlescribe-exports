class Main {
  static run(file) {
    const roster = Interpreter.read(file);
    console.log(roster);

    const sanitizedRoster = Sanitizer.sanitize(roster);
    console.log(sanitizedRoster);

    const armyData = HardcodeArmyRules.get(sanitizedRoster.faction.name);

    const output = Builder.getOutput(sanitizedRoster, armyData);

    const download = document.getElementById('downloadButton');
    const blob = window.URL.createObjectURL(new Blob([output]), { type: "text/html" });
    download.setAttribute('href', blob);
    download.setAttribute('download', `${roster.name} actually usable.html`);

    const preview = document.getElementById('preview').contentWindow.document;
    preview.open();
    preview.write(output);
    preview.close();
  }
}