module.exports = {
  baseURL: "http://localhost:3000/v1",
  input: "generated/api",
  outputEachDir: false,
  trailingSlash: true,
  openapi: {
    inputFile: "http://localhost:8080/openapi.json",
  },
};
