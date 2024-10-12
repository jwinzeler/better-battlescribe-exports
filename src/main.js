class Main {
  static async run(file) {
    let roster = await RoszParser.read(file);
    this.build(roster);
  }

  static build(roster) {
    const sanitizedRoster = Sanitizer.sanitize(roster);
    const output = Builder.getOutput(sanitizedRoster);

    //ArmyCustomizer.show(sanitizedRoster);

    this.setupAll(roster.name, output);

    RosterHistory.add(
      output,
      { 
        name: roster.name,
        faction: roster.faction.name,
        detachment: roster.detachment.name,
        points: roster.faction.points
      }
    );
  }

  static loadFromCustomizer() {
    let roster = TempStorage.getItem('tempRoster');
    
    const output = Builder.getOutput(roster);
    this.setupAll(roster.name, output);

    RosterHistory.add(
      output,
      { 
        name: roster.name,
        faction: roster.faction.name,
        detachment: roster.detachment.name,
        points: roster.faction.points
      }
    );
  }


  static loadFromHistory(index = null) {
    let historyStore = RosterHistory.get().history;
    const roster = historyStore[index];
    document.getElementById('fileInputDisplay').innerText = roster.rosterInfo?.name;
    document.getElementById('fileInput').removeAttribute('required')

    this.setupAll(roster.rosterInfo?.name, roster.roster);
  }

  static setupAll(rosterName, output) {
    this.setupPreview(output);

    const blob = window.URL.createObjectURL(new Blob([output], { type: 'text/html' }), { type: "text/html" });
    this.setupOpenButton(blob);
    this.setupDownloadButton(blob, rosterName);
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