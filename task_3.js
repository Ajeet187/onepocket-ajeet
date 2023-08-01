const fs = require('fs');

const filename = 'file.txt';

function countWordsNumber(text) {
    const cleanedText = text.replace(/[\r\n]+/g, ' ').trim();
    const words = cleanedText.split(/\s+/);
    return words.length;
}

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error  "${filename}": ${err}`);
  } else {
    const count = countWordsNumber(data);
    console.log(`Word count: ${count}`);
  }
});