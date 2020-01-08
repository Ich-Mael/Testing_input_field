//jshint esversion:6

describe("input 10 alphabets", ()=>{
    it("input value should be alphabets only", ()=>{
        let result = tenAlphabetOnly("alphabet");
        assert.match(result,  /^[A-Za-z]+$/, "Value is not aplphabet only");
    });

    it("length should be 10 maximum", ()=>{
        let result = tenAlphabetOnly("iamnottencharacterlong").length;
        assert.isAtMost(result, 10, 'Name length should be less than or equal to 10');
    });
});
