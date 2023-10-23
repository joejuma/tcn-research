class StringMapping {
  constructor() {
    this.mappings = {};
  }

  addMapping(key, value) {
    this.mappings[key] = value;
  }

  getMappedValue(key) {
    return this.mappings[key] || null;
  }
}

/*
// Usage:
const stringMapping = new StringMapping();
stringMapping.addMapping('key1', 'value1');
stringMapping.addMapping('key2', 'value2');

console.log(stringMapping.getMappedValue('key1')); // Output: "value1"
console.log(stringMapping.getMappedValue('key3')); // Output: null
*/