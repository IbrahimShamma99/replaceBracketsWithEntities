const { replaceBracketsWithEntity } = require("../dist/index.js");
let test = require("tape");

test("timing test", function (t) {
  t.equal(
    replaceBracketsWithEntity(
      "select {ancilary1},{ancilary2} from {s_m} where {ancilary2_operation}",
      {
        ancilary1: "brand",
        ancilary2: "channel",
        s_m: "BM",
        ancilary2_operation: "brand not in ('x')",
      }
    ),
    "select brand,channel from BM where brand not in ('x')"
  );
});
