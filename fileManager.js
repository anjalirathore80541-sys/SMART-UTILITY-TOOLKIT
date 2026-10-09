const fs = require('fs');
const path = require('path');
const logger = require('./modules/logger');

const fileName = path.join(__dirname, 'test.txt');

// CREATE FILE

function createFile() {
  fs.writeFile(fileName, 'Hello Node.js\n', (error) => {
    if (error) {
      return console.error('Create error:', error.message);
    }

    logger('File created successfully.');
  });
}

// READ FILE

function readFile() {
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
      return console.error('Read error:', error.message);
    }

    console.log('File content:', data.trim());
  });
}

// UPDATE FILE

function updateFile() {
  fs.appendFile(fileName, 'Learning FS Module\n', (error) => {
    if (error) {
      return console.error('Update error:', error.message);
    }

    logger('File updated successfully.');
  });
}

// DELETE FILE

function deleteFile() {
  fs.unlink(fileName, (error) => {
    if (error) {
      return console.error('Delete error:', error.message);
    }

    logger('File deleted successfully.');
  });
}

console.log('--- File Manager Demo ---');

createFile();

setTimeout(readFile, 300);
setTimeout(updateFile, 600);
setTimeout(readFile, 900);
setTimeout(deleteFile, 1200);