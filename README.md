This utility takes JSON and outputs the [XML required for the Script Filter](https://www.alfredapp.com/help/workflows/inputs/script-filter/) in [Workflows](https://www.alfredapp.com/workflows/) for the wonderful Mac App [Alfred](https://www.alfredapp.com). It can be used in other node.js modules or as a command line utility.

# Basic Usage

## Command Line

```bash
json-to-alfred path/to/data.json
```

That will output the XML Alfred is looking for. Keep in mind that it is best to use absolute paths in Alfred's Script Filters, a quick `which json-to-alfred` can tell you where it is.

## Node.js Modules

```js
var jsonToAlfred = require('json-to-alfred');
var data = {
    "results": [
        {
            "title": "Title of Result",
            "subtitle": "Subtitle",
            "arg": "Argument passed to next Alfred Workflow item as {query}"
        },
        {
            "title": "2nd title",
            "subtitle": "2nd subtitle",
            "arg": "2nd arg"
        }
    ]
};

var xml = jsonToAlfred.createItems(data);
console.log(xml);
```

