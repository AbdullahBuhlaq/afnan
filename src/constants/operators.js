const operators = {
  text: [
    { name: "equal", value: "equal" },
    { name: "not equal", value: "not equal" },
    { name: "contains", value: "contain" },
  ],
  number: [
    { name: "equal", value: "equal" },
    { name: "not equal", value: "not equal" },
    { name: "greater than", value: "gt" },
    { name: "greater or equal", value: "gte" },
    { name: "less than", value: "lt" },
    { name: "less or equal", value: "lte" },
  ],
  select: [
    { name: "equal", value: "equal" },
    { name: "not equal", value: "not equal" },
  ],
  array: [
    { name: "contains", value: "contain" },
    { name: "not contains", value: "not contain" },
  ],
  date: [
    { name: "equal", value: "equal" },
    { name: "not equal", value: "not equal" },
    { name: "after", value: "gt" },
    { name: "before", value: "lt" },
  ],
  "": [],
};

export default operators;
