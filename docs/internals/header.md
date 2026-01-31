# Header Character (16-bit Compression Metadata)

Every JSSC compressed string starts with a single **UTF-16 character** that stores all compression metadata required for decompression.

This character is called the **Header Character**.

It encodes the compression mode, flags, and mode-specific parameters entirely inside its **16 bits**, allowing the rest of the string to contain only compressed payload data.

## Standard Bit Layout

Although each compression mode is free to interpret the 16 bits differently, most modes follow a **standard layout**.

Instead of viewing the header as four nibbles, JSSC groups bits into **blocks**:

<ClientOnly>
    <HeaderCharacter :translate="{
        'Bits':'Bits',
        'Blocks':'Blocks',
        'Code':'Code'
    }" />
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

Whenever a mode deviates from the standard layout, this is explicitly documented on that mode's page.

## Compression Mode ID and `Code #1`

`Code #1` does **not always** represent the actual compression mode ID.
JSSC determines the compression mode from the **entire Header Character**.

> For example, when `Code #1` is `00` but `Code #2` is not `00`, this indicates **Compression Mode `06`**, not `00`.
> 
> In this case, this happens because [Compression Mode `06`](./modes/06.md) stores either `06` or `00` in `Code #1`, depending on the input type.
> 
> Therefore, when `Code #1` is `00` **and** `Code #2` is also `00`, the compression mode ID is `00`.
