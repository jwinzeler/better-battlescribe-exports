const fs = require('fs');

const files = {
  'Abilities': 3,
  /*'Datasheets_abilities': 0,
  'Datasheets_detachment_abilities': 0,
  'Datasheets_enhancements': 0,
  'Datasheets_keywords': 0,
  'Datasheets_leader': 0,
  'Datasheets_models_cost': 0,
  'Datasheets_models': 0,
  'Datasheets_options': 0,
  'Datasheets_unit_composition': 0,
  'Datasheets_wargear': 0,
  'Datasheets': 1,*/
  'Detachment_abilities': 0,
  'Factions': 1,
  'Last_update': 0,
  'Stratagems': 0,
};

const wahapediaExport = Object.keys(files).reduce((fileAcc, file) => {
  try {
    const data = fs.readFileSync(`./src/data/wahapedia-exports/${file}.csv`).toString().split(/\n/);
    let headers = data[0].replace(/\|\r/, '').split(/\|/).map((header) => header.trim());
    data.shift();
    
    return {
      ...fileAcc,
      [file.toLowerCase()]: data.reduce((rowAcc, row) => {
        if (!row) {
          return rowAcc;
        }
  
        const columns = row.replace(/\|\r/, '').split(/\|/);

        if (!rowAcc[columns[files[file]]]) {
          return {
            ...rowAcc,
            [columns[files[file]] ?? 'ANY']: [
              columns.reduce((columnAcc, column, index) => {
                return {
                  ...columnAcc,
                  [headers[index]]: column.trim().replace('’', '\''),
                };
              }, {}),
            ],
          }
        } else {
          rowAcc[columns[files[file]]].push(
            columns.reduce((columnAcc, column, index) => {
              return {
                ...columnAcc,
                [headers[index]]: column.trim(),
              };
            }, {}),
          );

          return rowAcc;
        }
      }, {}),
    }
  } catch(error) {
    console.error(`Error while trying to read ${file}.csv:`, error);
  }
}, {});

fs.writeFileSync('./src/data/wahapedia.js', `const wahapediaData = ${JSON.stringify(wahapediaExport)}`, 'utf-8');