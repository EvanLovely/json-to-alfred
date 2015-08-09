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

### Creating single records

Alternatively, you could take this approach, which would result in the same as above.

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

console.log(jsonToAlfred.prefix);
data.results.forEach(function(result) {
    console.log(jsonToAlfred.createItem(result));
});
console.log(jsonToAlfred.suffix);
```

# Properties

## `jsonToAlfred.prefix`

Output the prefix of the XML:

```xml
<?xml version="1.0" encoding="utf-8"?> <items>
```

## `jsonToAlfred.suffix`

Output the suffix of the XML:

```xml
</items>
```

# Methods

## `jsonToAlfred.createItem(result)`

Take JSON or a JS Object `result` that is this format:

```json
{
  "uid": "uid here",
  "arg": "arg here",
  "title": "title here",
  "subtitle": "subtitle",
  "copy": "text to copy here",
  "largeType": "display large text here"
}
```

which will output this:

```xml
<item uid="uid here" arg="arg here" valid="YES" autocomplete="title here">
  <title>title here</title>
  <subtitle>subtitle</subtitle>
  <text type="copy">text to copy here</text>
  <text type="largetype">display large text here</text>
</item>
```

## `jsonToAlfred.createItems(results)`

The all in one solution; this calls `jsonToAlfred.prefix`, then loops through `results` passed in - an array of `result` objects (see above) and calls `jsonToAlfred.createitem()` on each one, then calls `jsonToAlfred.suffix` to close it all.

