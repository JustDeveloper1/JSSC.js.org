# Compression Modes in JSSC

JSSC uses multiple **compression modes** internally to achieve optimal compression for different types of input data.

A compression mode defines **how the input string is analyzed, transformed, and encoded** into a compressed JavaScript string.

Compression modes are **an internal part of the algorithm** and are selected automatically during compression.

## List of JSSC Compression Modes
- `00` **No Compression**
- [`01` **Two-Digit CharCode Concatenation**](01)
- [`02` **Two-Byte CharCode Concatenation**](02)
- [`03` **Decimal Integer Packing**](03)
- [`04` **Alphabet Encoding**](04)
- [`05` **Character Encoding**](05)
- [`06` **Inline Integer Encoding**](06)
- [`07` **Frequency Map**](07)
- [`08` **URL**](08)
- `09` **Segmentation** <br>
  > Splits the input into independent segments that may use different compression modes.
- `10` **String Repetition** <br>
  > Detects and encodes repeated strings.
- `11` **Recursive Compression** <br>
  > Applies compression recursively to already compressed data.
