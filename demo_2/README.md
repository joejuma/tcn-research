# TCN Demo #2 - Mapping File

## What is this?
A demo of the TCN method trying to generated a mapping file parser.

### Input
["Mapping File Parser", "String Mapping", "Mapping Line Parser"];

### Generated
All the code in this repository is as-generated. The only human "clean-up" was putting the `/*` and `*/` tags around the usage comments.

### Purpose
This is a good example of the rough behavior LLMs produce if they don't have a detailed description of expected behavior. This is an example of what *I* call the "Entropy Limit Problem".

## Entropy Limit Problem
### What is it?
A certain amount of description is necessary to indicate the intended behavior of a system. So when you provide too little information, the possible results can vary a lot, which won't be what you expected. 

### How's this an example?
Two-to-three words wasn't enough to specify that I meant a mapping with the syntax "A -> B\n", resulting in the LLM generating incoherent specifications for behavior. This is a flaw in such short descriptions.

### How to fix this?
Providing more in-depth descriptions!

## Date
Created: Oct. 23rd 2023

## Author
Joseph Juma
