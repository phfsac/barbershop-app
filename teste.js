import fs from 'fs'

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.parse(data);
  const ids = jsonData.map(obj => obj.identifier.id);
  const idsString = JSON.stringify(ids);
  console.log(idsString);
});