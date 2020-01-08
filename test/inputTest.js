//jshint esversion:6


// test for input field 1 : name

describe("input 10 alphabets", ()=>{
    it("input value should be alphabets only", ()=>{
        let result = tenAlphabetOnly("alphabet");
        assert.match(result,  /^[A-Za-z]+$/, "Value should be aplphabet only");
    });

    it("input value should be alphabets only", ()=>{
        let result = tenAlphabetOnly("alphabe1t");
        assert.match(result,  /^[A-Za-z]+$/, "Value should be aplphabet only");
    });


    it("length should be 10 maximum", ()=>{
        let result = tenAlphabetOnly("iamnottencharacterlong").length;
        assert.isAtMost(result, 10, 'Name length should be less than or equal to 10');
    });

    it("length should be 10 maximum", ()=>{
        let result = tenAlphabetOnly("imtenchar").length;
        assert.isAtMost(result, 10, 'Name length should be less than or equal to 10');
    });
});

//test for inout field 2 : Number

describe("input 10 numeric characters", ()=>{

    it("input value should be numeric only", ()=>{
        let result = tenNumericOnly("12345");
        assert.match(result, /^\d+/ , "Value should be numeric only");
    });

    it("input value should be numeric only", ()=>{
        let result = tenNumericOnly("12345bet");
        assert.match(result, /^\d+/ , "Value should be numeric only");
    });

    it("length should be 10 maximum", ()=>{
        let result = tenNumericOnly("1234567");
        assert.isAtMost(result, 10, 'Name length should be less than or equal to 10');
    });

    it("length should be 10 maximum", ()=>{
        let result = tenNumericOnly("12345678910");
        assert.isAtMost(result, 10, 'Name length should be less than or equal to 10');
    });
});
