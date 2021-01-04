export function importData() {
  // TODO: metodo que recebe os dados importados do csv e converte para texto
  alert('import works! 😄');
};

export function csvToJSON(csv, split) {

  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(split);

  for (var i = 1; i < lines.length ; i++) {
    const obj = {};
    const currentline = lines[i].split(split);

    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return JSON.stringify(result);
};

export function jsonToPDF() {
  // TODO: use Session storage to maintain data
}

export function jsonToImage() {
  // TODO: future task
}

export function exportResult() {
  // TODO: export result data converted .pdf and more (future task)
  console.log('export works! 😄');
}

export function rectify() {
  // TODO: rectifies the data and completes the electronic point
}
