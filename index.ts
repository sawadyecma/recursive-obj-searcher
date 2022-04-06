import { RecursiveObjSearcher } from "./src/recursive-obj-searcher";

const seacher = new RecursiveObjSearcher();
seacher.search({});

const matched = seacher.search({ a: { b: { err: { error: { a: "aaa" } } } } });

console.log(matched);

const matched2 = seacher.search({
  a: { b: { err: { error: { a: "aaa" } } } },
  error: { code: "aaaaa" },
  ac: {
    error: { code: "acdsva" },
  },
});

console.log(matched2);

matched2.forEach((ele) => {
  console.log((ele as any)["error"]["code"]);
});
