const frags = require('./lib/frags');

module.exports = {
  /**
   * Generate text block with random content
   *
   * Valid options are:
   *  minWords: minimum number of words in a sentence
   *  maxWords: maximum number of words in a sentence
   *  minSentences: minumum number of sentences in a text block
   *  maxSentences: maximum number of sentences in a text block
   *
   * @param {object} options
   * @return {string} random text block
   */
  getTextBlock: function (options = {}) {
    if (typeof options !== 'object' || options === null) options = {};
    /**
     * xSentenceLength: minumum/maximum number of words in a sentence
     * xTextLength: min/max number of sentences in a text block
     */
    const minSentenceLength = options['minWords'] || 5;
    const maxSentenceLength = options['maxWords'] || 15;
    const minTextLength = options['minSentences'] || 1;
    const maxTextLength = options['maxSentences'] || 3;

    const textLength = this._getRandom(minTextLength, maxTextLength);

    const sentenceList = [];
    for (let i = 0; i < textLength; i++) {
      const sentenceLength = this._getRandom(minSentenceLength, maxSentenceLength);
      sentenceList.push(this._buildSentence(sentenceLength));
    }
    return sentenceList.join(' ');
  },
  _buildWord: function () {
    let length = this._getRandom(1, frags.length); // number of fragments used
    let word = '';
    for (let i = 0; i < length; i++) {
      let allowedFrags = frags[i];
      if (word !== '') {
        // let's skip double-vowels and double-consonants when gluing fragments
        const lastCI = this.__v.indexOf(word.charAt(word.length - 1));
        allowedFrags = frags[i].filter((f) => {
          const fI = this.__v.indexOf(f.charAt(0));
          if ((fI === -1 && lastCI === -1) ||
              (fI !== -1 && lastCI !== -1)) return false;
          return true;
        });
      }
      // contact a random fragment at the end of the word
      const frag = allowedFrags[this._getRandom(0, allowedFrags.length - 1)];
      if (i == 0 && frag.length == 2 && length == 1) {
        length++;
      }
      word += frag;
    }
    return word;
  },
  _buildSentence: function (length) {
    const wList = [];
    for (let i = 0; i < length; i++) {
      wList.push(this._buildWord());
    }
    // adds punctuation if sentence is longer than 5 words
    // it may randomly skip the punctuation if it contains less than 9 words, otherwise it's required
    this._addPunctuation(wList, 6, 9);
    let sentence = wList.join(' ');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
  },
  // add punctuation around the middle of the sentence... or not
  _addPunctuation: function (wordList, minLength, reqLength) {
    if (minLength < 5) minLength = 5;
    // don't add punctuation if text contains less than minLength words
    if (wordList.length < minLength) return;
    // randomly skip punctuation if text contains less than reqLength words
    if (wordList.length < reqLength &&
        Math.random() < 0.4) return;
    let pos = Math.floor(wordList.length / 2) + (2 - this._getRandom(0, 4));
    if (pos >= wordList.length - 2) pos -= 2;
    wordList[pos] = wordList[pos] + ',';
  },
  _getRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  __v: ['a','e','i','o','u']
};
