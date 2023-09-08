const convertButton = document.getElementById('convertButton');
const fileInput = document.getElementById('fileInput');
const fileReader = new FileReader();

let file;
let fileType;

fileReader.addEventListener('load', async (event) => {
  Logger.log(`New file loaded: ${file.name}`);
  const loadedFile = event.target.result;

  if (loadedFile) {
    Main.run(loadedFile, fileType);
  } else {
    Logger.error(`File loading failed.`);
  }
});

fileInput.addEventListener('change', (event) => {
  file = event.target.files?.[0];
  Logger.log(`New file selected: ${file.name}`);
  if (file?.type === 'text/html') {
    Logger.log(`Loading file: ${file.name}`);
    fileType = 'html';
    Main.setupPreview(loader);
    fileReader.readAsText(file);
  } else if (file?.name.includes('.rosz') || file?.name.includes('.ros')) {
    Logger.log(`Loading file: ${file.name}`);
    fileType = 'rosz';
    fileReader.readAsBinaryString(file);
  } else {
    Logger.error(`No file or invalid file type selected.`);
  }
});