
<!--#echo json="package.json" key="name" underline="=" -->
json-data-uri
=============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Parse and encode (plain or Base64) data URIs with JSON content and correct
MIME type.
<!--/#echo -->



API
---

This module exports an object that holds these functions:

### parse(uri)

Try to parse JSON data from a data URI given as string `uri`.
Returns decoded data, or `undefined` if there was an error.


### toPlainUri(data)

Convert JSON-able `data` to a plain text data: URI.
Returns a URI as a string.
With bad input, the content part of the URI will be broken.


### toBase64Uri(data)

Convert JSON-able `data` to a base64-encoded data: URI.
Returns a URI as a string.
With bad input, the content part of the URI will be broken.





Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
