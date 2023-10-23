class MappingLineParser {
  parse(line) {
    const [key, value] = line.split('->').map(str => str.trim());
    const mapping = new StringMapping();
    mapping.addMapping(key, value);
    return mapping;
  }
}

/*
// Creating an instance of the MappingLineParser class
const parser = new MappingLineParser();

// Parsing a mapping line
const line = 'key1 -> value1';
const stringMapping = parser.parse(line);

// Retrieving value for a specific key
const value1 = stringMapping.getValue('key1');
console.log(value1);  // Output: value1

// Retrieving all the key-value pairs
const allValues = stringMapping.getAllValues();
console.log(allValues);  // Output: [ { key: 'key1', value: 'value1' } ]
*/