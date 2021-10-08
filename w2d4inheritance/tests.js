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
            assert.deepEqual([10, 11, 12, 13], [13, 11, 10, 12].bubbleSort());
            assert.deepEqual([-1, 0, 1, 2, 3, 4, 5], [4, 5, 3, 2, 1, 0, -1].bubbleSort());
        });
});


let teacher = new Teacher();
teacher.setName("Bilguun");

describe("Teacher inheritance Person", function () {
    it(`Takes course name, and returns course with teacher name`,
        function () {
            assert.deepEqual("Bilguun is now teaching CS472", teacher.teach("CS472"));
        });
});