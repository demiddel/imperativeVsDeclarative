const routes = {
  "/": {
    linkLabel: "Home",
    content: "Home Page Content",
  },
  "/imperative": {
    linkLabel: "Imperative",
    content: `<object data="./src/imperative/index.html" width="100%" height="100%">`,
  },
  "/declarative": {
    linkLabel: "Declarative",
    content: `<object data="./src/declarative/index.html" width="100%" height="100%">`,
  },
  "/mixed": {
    linkLabel: "Mixed",
    content: `<object data="./src/mixed/index.html" width="100%" height="100%">`,
  },
};

export { routes };
