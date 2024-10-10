const convertButton = document.getElementById('convertButton');
const fileInput = document.getElementById('fileInput');
const fileReader = new FileReader();
const buttonConfig = [
  { buttonId: 'history', toggleElementId: 'history-list' },
  { buttonId: 'log-wrapper', toggleElementId: 'log-content' },
  { buttonId: 'settings', toggleElementId: 'setting-container' }
];
const buttonManager = new ButtonManager(buttonConfig);

let file;

fileReader.addEventListener('load', async (event) => {
  Logger.log(`New file loaded: ${file.name}`);
  const loadedFile = event.target.result;

  if (loadedFile) {
    Main.run(loadedFile);
  } else {
    Logger.error(`File loading failed.`);
  }
});

fileInput.addEventListener('change', (event) => {
  file = event.target.files?.[0];
  Logger.log(`New file selected: ${file?.name}`);
  if (file?.type === 'text/html') {
    Logger.error(`Html files are no longer supporter, please use .rosz exports instead.`);
  } else if (file?.name.includes('.rosz') || file?.name.includes('.ros')) {
    document.getElementById('button-container').classList.remove('hidden');
    Logger.log(`Loading file: ${file.name}`);
    fileReader.readAsBinaryString(file);
  } else {
    document.getElementById('button-container').classList.add('hidden');
    Logger.error(`No file or invalid file type selected.`);
  }
});

window.onload = (() => {
  RosterHistory.showList();

  Settings.setupCheckbox('buttonStatLine');
  Settings.setupCheckbox('darkMode');
  Settings.setupCheckbox('previewSetting');

  Settings.getDarkMode();
  Settings.getPreviewEnabled();

  document.getElementById('lastUpdate').innerHTML = Object.keys(wahapediaData.last_update)[0];
});