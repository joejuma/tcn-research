class MappingFileParser {
  constructor() {
    this.mapping = new Map();
  }

  parse(fileContent) {
    const lines = fileContent.trim().split('\n');
    for (const line of lines) {
      const [key, value] = line.split('=');
      if (key && value) {
        this.mapping.set(key.trim(), value.trim());
      }
    }
  }

  getValue(key) {
    return this.mapping.get(key);
  }

  getAllValues() {
    const values = [];
    for (const [key, value] of this.mapping.entries()) {
      values.push({ key, value });
    }
    return values;
  }
}

/*
// Creating an instance of the MappingFileParser class
const parser = new MappingFileParser();

// Sample file content
const fileContent = `
  key1 = value1
  key2=value2
  key3   =   value3
  key4 =`;

// Parsing the file content
parser.parse(fileContent);

// Retrieving value for a specific key
const value1 = parser.getValue('key1');
console.log(value1);  // Output: value1

// Retrieving all the key-value pairs
const allValues = parser.getAllValues();
console.log(allValues);  // Output: [ { key: 'key1', value: 'value1' }, ... ]
*/