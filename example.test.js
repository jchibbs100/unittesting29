const sayHello = require("./example.js");

describe("say hello", () => {
  test("returns hello", () => {
    expect(sayHello()).toMatch("Hello");
  });
});
