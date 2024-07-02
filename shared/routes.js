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
  "/bad-mixed": {
    linkLabel: "Bad Mixed",
    content: `<object data="./src/bad-mixed/index.html" width="100%" height="100%">`,
  },
  "/bad-cart": {
    linkLabel: "Bad Cart",
    content: `<object data="./src/bad-cart/index.html" width="100%" height="100%">`,
  },
};

export { routes };
