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

Optionally, you can pass an options object to `getTextBlock()` with any of the following:
* minWords: minimum number of words in each sentence
* maxWords: maximum number of words in each sentence
* minSentences: minimum number of sentences in the text block
* maxSentences: maximum number of sentences in the text block
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

**Note**: if a sentence is longer, than 5 words, optionally a comma __might__ be inserted around the middle of the sentence. If the sentence is at least 9 words long, a comma __will__ be inserted around the middle of the sentence. This is currently not configurable.

## Testing
`npm test`

## Releases
1.0.0 Initial release
