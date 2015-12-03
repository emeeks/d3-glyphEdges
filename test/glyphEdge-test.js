var tape = require("tape"),
    glyphEdges = require("../");

tape("glyphEdges should be an object.", function(test) {
  test.equal(typeof glyphEdges, "object");
  test.end();
});
