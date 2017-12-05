const expect = require('chai').expect;
const randomText = require('../random-textblock');

describe("random-textblock.getTextBlock", function () {
  it("generates random text", function (done) {
    const text1 = randomText.getTextBlock();
    const text2 = randomText.getTextBlock();
    expect(text1).to.not.equal(text2);
    done();
  });
  it("generates requested number of words", function (done) {
    const text = randomText.getTextBlock({ minWords: 5, maxWords: 5, minSentences: 1, maxSentences: 1});
    const words = text.split('.')[0].split(' '); // only check first sentence, ignore error in number of sentences
    expect(words).to.have.lengthOf(5);
    done();
  });
  it("generates requested number of sentences", function (done) {
    const sentences = randomText.getTextBlock({ minSentences: 3, maxSentences: 3}).replace(/[^\.]/g,'');
    expect(sentences).to.have.lengthOf(3);
    done();
  });
});
