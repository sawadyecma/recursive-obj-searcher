const defaultMatcher = function (obj: Object): boolean {
  if (!obj.hasOwnProperty("error")) {
    return false;
  }

  const error = (obj as any)["error"];
  if (!error.hasOwnProperty("code")) {
    return false;
  }

  return true;
};

export class RecursiveObjSearcher {
  private matched: Object[] = [];
  constructor(private matcher: (obj: Object) => boolean = defaultMatcher) {}

  search(obj: Object) {
    this.matched = [];
    this.searchRecursively(obj);
    return this.matched;
  }

  private searchRecursively(obj: any) {
    if (typeof obj !== "object") {
      return;
    }

    // nullガード
    if (!obj) {
      return;
    }

    if (this.matcher(obj)) {
      this.matched.push(obj);
    }

    const objValues = Object.values(obj);
    objValues.forEach((objValue) => {
      this.searchRecursively(objValue);
    });
  }
}
