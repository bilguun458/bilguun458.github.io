describe("sum", function () {
    it("takes array of integer, and returns summary of each array element",
        function () {
            assert.equal(10, sum([1, 2, 3, 4]));
            assert.equal(15, sum([1, 2, 3, 4, 5]));
        });
});

describe("reverse", function () {
    it("takes a string, and returns the string's all characters reversed",
        function () {
            assert.equal("nuuglib", reverse("bilguun"));
            assert.equal("asdfghjkl", reverse("lkjhgfdsa"));
        });
});

describe("filterLongWords", function () {
    it("takes a array of sentences and minimum number of words, and returns array of strings that has more than words of 2nd parameter",
        function () {
            assert.deepEqual(['aaaa'], filterLongWords(["aa", "aaa", "aaaa", "b", "bb"], 3));
            assert.deepEqual(['aaa', 'aaaa'], filterLongWords(["aa", "aaa", "aaaa", "b", "bb"], 2));
        });
});