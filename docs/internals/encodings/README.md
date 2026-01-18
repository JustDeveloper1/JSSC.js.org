I use this function to convert encodings to `<CharTable/>`

```js
function toVueTS(ce="BASE") {
    const out = {}
    for (const [key, value] of Object.entries((new _JSSC.use())['JSSC'+ce.toUpperCase()]())) {
        if (parseInt(key) > 0x40) out[parseInt(key).toString(16).toUpperCase()] = value;
    }
    return JSON.stringify(out)
}
```
