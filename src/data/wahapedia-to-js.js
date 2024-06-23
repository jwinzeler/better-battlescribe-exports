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

async function main() {
  return await Object.keys(files).reduce(async (fileAcc, file) => {
    try {
      console.log(`Fetching ${file}`);
      const response = await fetch(`http://wahapedia.ru/wh40k10ed/${file}.csv`);
      const raw = await response.text();
      const data = raw?.toString()?.split(/\n/)
  
      let headers = data[0].replace(/\|\r/, '').split(/\|/).map((header) => header.trim());
      console.log(`Headers: ${headers.join(',')}`)
      data.shift();
      
      return {
        ... await fileAcc,
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
                    [headers[index]]: column
                      .trim()
                      .replaceAll('’', '\'')
                      .replaceAll('–', '-'),
                  };
                }, {}),
              ],
            }
          } else {
            rowAcc[columns[files[file]]].push(
              columns.reduce((columnAcc, column, index) => {
                return {
                  ...columnAcc,
                  [headers[index]]: column
                    .trim()
                    .replaceAll('’', '\'')
                    .replaceAll('–', '-'),
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
  }, Promise.resolve({}));
}

main().then((wahapediaExport) => {
  fs.writeFileSync('./src/data/wahapedia.js', `const wahapediaData = ${JSON.stringify(wahapediaExport)}`, 'utf-8')
});