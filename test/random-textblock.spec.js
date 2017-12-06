const expect = require('chai').expect;
const randomText = require('../random-textblock');

describe('random-textblock.getTextBlock', function () {
  it('generates random text', function (done) {
    const text1 = randomText.getTextBlock();
    const text2 = randomText.getTextBlock();
    expect(text1).to.not.equal(text2);
    done();
  });
  it('generates requested number of words', function (done) {
    const options = {
      minWords: 5,
      maxWords: 5,
      minSentences: 1,
      maxSentences: 1
    };
    const text = randomText.getTextBlock(options);
    const words = text.split('.')[0].split(' ');
    expect(words).to.have.lengthOf(5);
    done();
  });
  it('generates requested number of sentences', function (done) {
    const options = { minSentences: 3, maxSentences: 3 };
    const sentences = randomText.getTextBlock(options).replace(/[^\.]/g, '');
    expect(sentences).to.have.lengthOf(3);
    done();
  });
  it('adds punctuation if requested', function (done) {
    const options = {
      minWords: 10,
      maxWords: 10,
      minSentences: 1,
      maxSentences: 1,
      punctuationMin: 5,
      punctuationReq: 5
    };
    const sentence = randomText.getTextBlock(options);
    expect(sentence).to.include(',');
    done();
  });
  it('does not add punctuation if sentence too short', function (done) {
    const options = {
      minWords: 9,
      maxWords: 9,
      minSentences: 1,
      maxSentences: 1,
      punctuationMin: 10,
      punctuationReq: 10
    };
    const sentence = randomText.getTextBlock(options);
    expect(sentence).to.not.include(',');
    done();
  });
  it('uses specified terminal punctuation', function (done) {
    const options = {
      minWords: 5,
      maxWords: 5,
      minSentences: 1,
      maxSentences: 1,
      terminalPunctuation: '?'
    };
    const sentence = randomText.getTextBlock(options);
    expect(sentence).to.include('?');
    done();
  });
});
