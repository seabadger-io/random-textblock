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
});
