class Main {
  static run(file) {
    const roster = Parser.read(file);
    const sanitizedRoster = Sanitizer.sanitize(roster);
    const armyData = HardcodeArmyRules.get(sanitizedRoster.faction.name);
    const output = Builder.getOutput(sanitizedRoster, armyData);

    this.setupPreview(output);

    const blob = window.URL.createObjectURL(new Blob([output], { type: 'text/html' }), { type: "text/html" });
    this.setupOpenButton(blob);
    this.setupDownloadButton(blob, roster.name);
  }

  static setupDownloadButton(blob, name) {
    const download = document.getElementById('downloadButton');
    download.setAttribute('href', blob);
    download.setAttribute('download', `Suicide-Overwatch ${name}.html`);
  }

  static setupOpenButton(blob) {
    const open = document.getElementById('openButton');
    open.setAttribute('href', blob);
  }

  static setupPreview(output) {
    const preview = document.getElementById('preview').contentWindow.document;
    preview.open();
    preview.write(output);
    preview.close();
  }
}