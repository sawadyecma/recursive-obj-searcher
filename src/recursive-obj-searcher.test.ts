import { RecursiveObjSearcher } from "./recursive-obj-searcher";

describe("RecursiveObjSeacher", () => {
  describe("search", () => {
    const seacher = new RecursiveObjSearcher();
    it("case1", () => {
      const arg = {
        error: "aaa",
        a: {
          code: "aaa",
        },
      };
      const result = seacher.search(arg);

      expect(result).toEqual([]);
    });

    it("case2", () => {
      const arg = {
        a: {
          error: { code: "NotFound" },
        },
        b: {
          code: "aaa",
        },
      };
      const result = seacher.search(arg);

      expect(result).toEqual([{ error: { code: "NotFound" } }]);
    });
  });
});
