const {
  calculateStringVal,
} = require("../../../api/utils/stringCalculator.helper");

describe("calculateStringVal", () => {
  test(`Testing For an Empty String -- (''')`, () => {
    const { val, negativeNumbers, positiveNumbers } = calculateStringVal("");

    expect(val).toEqual(0);
    expect(negativeNumbers).toEqual([]);
    expect(positiveNumbers).toEqual([]);
  });

  test(`Testing For Only One Positive String -- ('1'')`, () => {
    const { val, negativeNumbers, positiveNumbers } = calculateStringVal("1");

    expect(val).toEqual(1);
    expect(negativeNumbers).toEqual([]);
    expect(positiveNumbers).toEqual([1]);
  });

  test(`Testing For Only Multiple Positive String -- ('1,2'')`, () => {
    const { val, negativeNumbers, positiveNumbers } = calculateStringVal("1,2");

    expect(val).toEqual(3);
    expect(negativeNumbers).toEqual([]);
    expect(positiveNumbers).toEqual([1, 2]);
  });

  test(`Testing For Only Multiple Positive String -- ('1,4'')`, () => {
    const { val, negativeNumbers, positiveNumbers } = calculateStringVal("1,4");

    expect(val).toEqual(5);
    expect(negativeNumbers).toEqual([]);
    expect(positiveNumbers).toEqual([1, 4]);
  });

  test(`Testing For Only Multiple Positive String to handle new lines -- ('1\n2,3'')`, () => {
    const { val, negativeNumbers, positiveNumbers } =
      calculateStringVal("1\n2,3");

    expect(val).toEqual(6);
    expect(negativeNumbers).toEqual([]);
    expect(positiveNumbers).toEqual([1, 2, 3]);
  });

  test(`Testing For Only Multiple Positive String to handle different delimiters -- ('//;\n1;2'')`, () => {
    const { val, negativeNumbers, positiveNumbers } =
      calculateStringVal("//;\n1;2");

    expect(val).toEqual(3);
    expect(negativeNumbers).toEqual([]);
    expect(positiveNumbers).toEqual([1, 2]);
  });

  test(`Testing For One Negative String -- ('-1')`, () => {
    const { val, negativeNumbers, positiveNumbers } = calculateStringVal("-1");

    expect(val).toEqual(0);
    expect(negativeNumbers).toEqual(["-1"]);
    expect(positiveNumbers).toEqual([]);
  });

  test(`Testing For Multiple Negative String -- ('-1, -2, -3')`, () => {
    const { val, negativeNumbers, positiveNumbers } =
      calculateStringVal("-1, -2, -3");

    expect(val).toEqual(0);
    expect(negativeNumbers).toEqual(["-1", "-2", "-3"]);
    expect(positiveNumbers).toEqual([]);
  });

  test(`Testing For Only Multiple Negative String to handle different delimiters -- ('//;\n-1;-2'')`, () => {
    const { val, negativeNumbers, positiveNumbers } =
      calculateStringVal("//;\n-1;-2'");

    expect(val).toEqual(0);
    expect(negativeNumbers).toEqual(["-1", "-2"]);
    expect(positiveNumbers).toEqual([]);
  });

  test(`Testing For Both Negative and Positive String -- ('1,-1,2,-2')`, () => {
    const { val, negativeNumbers, positiveNumbers } =
      calculateStringVal("1,-1,2,-2");

    expect(val).toEqual(3);
    expect(negativeNumbers).toEqual(["-1", "-2"]);
    expect(positiveNumbers).toEqual([1, 2]);
  });

  test(`Testing For Both Negative and Positive String to handle different delimiters -- ('//;-1;-2,&&87&-3, -55555555, -111111,**10%%1dfghjk1o1')`, () => {
    const { val, negativeNumbers, positiveNumbers } = calculateStringVal(
      "//;-1;-2,&&87&-3, -55555555, -111111,**10%%1dfghjk1o1"
    );

    expect(val).toEqual(100);
    expect(negativeNumbers).toEqual(["-1", "-2", "-3", "-55555555", "-111111"]);
    expect(positiveNumbers).toEqual([87, 10, 1, 1, 1]);
  });
});
