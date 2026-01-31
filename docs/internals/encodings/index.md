# Character Encodings in JSSC
JSSC uses its own **internal character encodings** as part of the compression algorithm.

These encodings are **not related** to ASCII, UTF‑8, UTF‑16, Windows‑125x, ISO‑8859, or any other system or platform encoding.

They exist **only inside JSSC** and are used to optimize compression for many languages, primarily the most widely used ones.

Character Encodings are used by [**Compression Mode `05` — “Character Encoding”**](../modes/05.md).
There are **15 Character Encodings** covering **23 languages**.

## List of JSSC Character Encodings
- [`00` **JSSCBASE**](base) — No languages - Punctuation, numbers, currencies, and symbols
- [`01` **JSSCRU**](ru) — Russian, Ukrainian, Belarusian, Kazakh
- [`02` **JSSCENRU**](enru) — English, Russian, Ukrainian, Belarusian
- [`03` **JSSCENKK**](enkk) — English, Russian, Kazakh
- [`04` **JSSCHI**](hi) — Hindi
- [`05` **JSSCENHI**](enhi) — English, Hindi
- [`06` **JSSCBN**](bn) — Bengali
- [`07` **JSSCENBN**](enbn) — English, Bengali
- [`08` **JSSCHIBN**](hibn) — Hindi, Bengali
- [`09` **JSSCJA**](ja) — English, Japanese (Hiragana and Katakana)
- [`10` **JSSCTelu**](telu) — English, Telugu
- [`11` **JSSCMR**](mr) — English, Marathi
- [`12` **JSSCB**](b) — *“Baltic”* - Latvian, Lithuanian, Estonian, Polish, Czech, Slovak
- [`13` **JSSCE**](e) — *“European”* - English, French, German, Spanish, Portuguese, Italian, Dutch
- [`14` **JSSCAR**](ar) — Arabic
