class MappingLineParser {
  constructor() {
    this.mappings = {};
  }

  parseLine(line) {
    const [key, value] = line.split('=');
    if (key && value) {
      this.mappings[key.trim()] = value.trim();
      console.log(`Mapping line parsed: ${key} -> ${value}`);
    } else {
      console.error(`Invalid mapping line: ${line}`);
    }
  }

  getMappedValue(key) {
    return this.mappings[key] || null;
  }
}

/*
// Usage:
const mappingParser = new MappingLineParser();
mappingParser.parseLine('key1=value1');
mappingParser.parseLine('key2=value2');
console.log(mappingParser.getMappedValue('key1')); // Output: "value1"
console.log(mappingParser.getMappedValue('key3')); // Output: null
*/