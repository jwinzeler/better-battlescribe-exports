class Main {
  static async run(file, fileType) {
    //TODO: Looks shit
    const isHtml = fileType === "html";
    const roster = isHtml ? Parser.read(file) : await RoszParser.read(file);

    const sanitizedRoster = Sanitizer.sanitize(roster);
    const armyData = isHtml ? HardcodeArmyRules.get(sanitizedRoster.faction.name) : roster.armyData;
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