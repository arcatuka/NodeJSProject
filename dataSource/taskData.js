import fs from 'fs'

export let task = []
export function writeFileJson(){
    fs.writeFile('../NODEJS/database/data.json', JSON.stringify(task), (err) => {
      if (err) throw err;
      console.log('Data written to file');
  });
  }
  export function readFileJson(){
    fs.readFile('../NODEJS/database/data.json', (err, data) => {
      if (err) throw err;
      task = data ?JSON.parse(data):[]
  });
}