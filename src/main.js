class Main {
  static async run(file, fileType) {
    const isHtml = fileType === "html";
    let roster = isHtml ? Parser.read(file) : await RoszParser.read(file);
    this.build(roster);
  }

  static build(roster, addToHistory = true) {
    const sanitizedRoster = Sanitizer.sanitize(roster);
    const output = Builder.getOutput(sanitizedRoster);

    ArmyCustomizer.show(sanitizedRoster);

    this.setupPreview(output);

    const blob = window.URL.createObjectURL(new Blob([output], { type: 'text/html' }), { type: "text/html" });
    this.setupOpenButton(blob);
    this.setupDownloadButton(blob, roster.name);

    if (addToHistory) RosterHistory.add(sanitizedRoster);
  }

  static rerun(index = null, save = false) {
    let roster = TempStorage.getItem('tempRoster');
    if (index !== null) {
      let historyStore = RosterHistory.get().history;
      roster = historyStore[index];
    }
    this.build(roster, save);
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