describe("string filter", function () {
    it(`accepts an array of strings that
    specifies a list of banned words. The function returns the string after removing all the
    banned words`,
        function () {
            assert.equal("hello js", "hello word js".filter("word"));
            assert.equal("hello", "hello word js".filter("word", "js"));
        });
});

describe("array bubbleSort", function () {
    it("takes a Array object, and returns sorted one",
        function () {
            assert.equal("nuuglib", reverse("bilguun"));
            // assert.equal("asdfghjkl", reverse("lkjhgfdsa"));
        });
});

// describe("filterLongWords", function () {
//     it("takes a array of sentences and minimum number of words, and returns array of strings that has more than words of 2nd parameter",
//         function () {
//             assert.deepEqual(['aaaa'], filterLongWords(["aa", "aaa", "aaaa", "b", "bb"], 3));
//             assert.deepEqual(['aaa', 'aaaa'], filterLongWords(["aa", "aaa", "aaaa", "b", "bb"], 2));
//         });
// });