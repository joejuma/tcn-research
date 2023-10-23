class StringMapping {
  constructor() {
    this.mapping = {};
  }

  addMapping(key, value) {
    this.mapping[key] = value;
  }

  getValue(key) {
    return this.mapping[key];
  }

  getAllValues() {
    const values = [];
    for (const key in this.mapping) {
      const value = this.mapping[key];
      values.push({ key, value });
    }
    return values;
  }
}

/*
// Creating an instance of the StringMapping class
const mapping = new StringMapping();

// Adding mappings
mapping.addMapping('key1', 'value1');
mapping.addMapping('key2', 'value2');
mapping.addMapping('key3', 'value3');
mapping.addMapping('key4', '');

// Retrieving value for a specific key
const value1 = mapping.getValue('key1');
console.log(value1);  // Output: value1

// Retrieving all the key-value pairs
const allValues = mapping.getAllValues();
console.log(allValues);  // Output: [ { key: 'key1', value: 'value1' }, ... ]
*/