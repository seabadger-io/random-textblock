# Random Text Block

Generate pseudo-random text block from a vareity of predefined fragments. The results are largely random, but they are resembling lorem ipsum texts.

__Example__:
*Per facegius calaverol uti siraelo, peraetur iuficisquam ani put. Fimic ponacurtipa sapistr pecensaudea veriasum libar, quiraenes scor facelilit sila. Sunim dific putomi hab, mor repilucu peficab scedaefec morecu anira. Anitatege intide, mor leged maniceren petatobun. Omnar plegisqand sarimo ten hom, quitat dipic fipividest simag semicisqia.*

## Installation

`npm install random-textblock`
  
## Usage

To use the default options:
```javascript
const randomText = require('random-textblock');

console.log(randomText.getTextBlock());
```

__`getTextBlock()` options__:

**Control length of sentences and of the text block:**
* _minWords_: minimum number of words in each sentence. Default: 5
* _maxWords_: maximum number of words in each sentence. Default: 15
* _minSentences_: minimum number of sentences in the text block. Default: 1
* _maxSentences_: maximum number of sentences in the text block. Default: 3

**Control punctuation at the end and mid the sentences:**
* _terminalPunctuation_: string of characters to be randomly used as punctuation at the end of sentences. The more often a character appears in the string, the higher the chance it will be used, for example to make dots dominant, use something like '........?!'. Default: '.'
* _punctuationMin_: if sentence contains at least punctuationMin words, a comma might be added around the middle of the sentence. Default: 6, Minimum: 5
* _punctuationReq_: if sentence contains at least punctuationReq words, a comma will be added around the middle of the sentence. Default: 9

```javascript
const randomText = require('random-textblock');

// exactly 1 sentce with exactly 8 words
const options = {
  minWords: 8,
  maxWords: 8,
  minSentences: 1,
  maxSentences: 1
};
console.log(randomText.getTextBlock(options));
```

## Testing
`npm test`

## Releases
* 1.0.0 Initial release
* 1.1.0 Configurable punctuation
