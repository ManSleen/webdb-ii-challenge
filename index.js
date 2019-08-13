const server = require("./server");

const port = process.env.PORT || 5050;

server.listen(port, () =>
  console.log(`\n*** API up and running on port ${port} ***\n`)
);
