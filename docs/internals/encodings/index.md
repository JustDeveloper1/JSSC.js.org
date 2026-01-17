# Character Encodings in JSSC
JSSC uses its own **internal character encodings** as part of the compression algorithm.

These encodings are **not related** to ASCII, UTF‑8, UTF‑16, Windows‑125x, ISO‑8859, or any other system or platform encoding.

They exist **only inside JSSC** and are used to optimize compression for many languages (only the most popular ones).

Character Encodings are used by **Compression Mode `05` — “Character Encoding”**.
There are **15 Character Encodings** covering **23 languages**.

## List of JSSC Character Encodings
- `00` **JSSCBASE** — No languages - Punctuation, numbers, currencies, and symbols
- `01` **JSSCRU** — Russian, Ukrainian, Belarusian, Kazakh
- `02` **JSSCENRU** — English, Russian, Ukrainian, Belarusian
- `03` **JSSCENKK** — English, Russian, Kazakh
- `04` **JSSCHI** — Hindi
- `05` **JSSCENHI** — English, Hindi
- `06` **JSSCBN** — Bengali
- `07` **JSSCENBN** — English, Bengali
- `08` **JSSCHIBN** — Hindi, Bengali
- `09` **JSSCJA** — English, Japanese (Hiragana and Katakana)
- `10` **JSSCTelu** — English, Telugu
- `11` **JSSCMR** — English, Marathi
- `12` **JSSCB** — *“Baltic”* - Latvian, Lithuanian, Estonian, Polish, Czech, Slovak
- `13` **JSSCE** — *“European”* - English, French, German, Spanish, Portuguese, Italian, Dutch
- `14` **JSSCAR** — Arabic
