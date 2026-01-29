# Header Character (16-bit Compression Metadata)

Every JSSC compressed string starts with a single **UTF-16 character** that stores all compression metadata required for decompression.

This character is called the **Header Character**.

It encodes the compression mode, flags, and mode-specific parameters entirely inside its **16 bits**, allowing the rest of the string to contain only compressed payload data.

## Standard Bit Layout

Although each compression mode is free to interpret the 16 bits differently, most modes follow a **standard layout**.

Instead of viewing the header as four nibbles, JSSC groups bits into **semantic blocks**:

<ClientOnly>
    <HeaderCharacter />
</ClientOnly>

> | Name | Type | Meaning / Standart Usage |
> |--:|:-:|---|
> | Code #1 | Integer | Compression Mode ID |
> | Code #2 | Integer | (Used by compression mode) |
> | Code #3 | Integer | Data type / JUSTC used? / BeginID |
> | i? | Boolean | Input RLE used? |
> | o? | Boolean | Output RLE used? |
> | s? | Boolean | Sequences found & compressed? |
> | b? | Boolean | BeginID used? (`false` = Code #3 is BeginID) |

## Non-Standard Layouts

The **standard layout is not mandatory**.

Some compression modes repurpose parts of the header to achieve better compression efficiency.

Whenever a mode deviates from the standard layout, this is explicitly documented on that mode’s page.
