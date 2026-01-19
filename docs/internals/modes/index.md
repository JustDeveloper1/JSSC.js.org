# Compression Modes in JSSC

JSSC uses multiple **compression modes** internally to achieve optimal compression for different types of input data.

A compression mode defines **how the input string is analyzed, transformed, and encoded** into a compressed JavaScript string.

Compression modes are **an internal part of the algorithm** and are selected automatically during compression.

## List of JSSC Compression Modes
- `00` **No Compression**
- `01` **Two-Digit CharCode Concatenation**
- `02` **ASCII in UTF-16**
- `03` **Integers (any)**
- `04` **Build alphabet**
- `05` **Character Encoding**
- `06` **Integers (>15)**
- `07` **Frequency map**
- `08` **URL**
- `09` **Segmentation**
- `10` **Repeating strings**
- `31` **Recursive compression**
