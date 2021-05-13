// const fs = require("fs");
// const path = require("path");

// const getProductsFromFile = (cb) => {
//   const p = path.join(
//     path.dirname(process.mainModule.filename),
//     "data",
//     "products.json"
//   );
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     }
//     cb(JSON.parse(fileContent));
//   });
// };

// module.exports = class Product {
//   constructor(t) {
//     this.title = t;
//   }

//   save() {
//     getProductsFromFile((products) => {
//       fs.readFile(p, (err, fileContent) => {});

//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), (err) => {
//         console.log(err);
//       });
//     });
//   }

//   static fetchAll(cb) {
//     getProductsFromFile(cb);
//   }

//   //   static fetchAll(cb) {
//   //     const p = path.join(
//   //       path.dirname(process.mainModule.filename),
//   //       "data",
//   //       "products.json"
//   //     );
//   //     fs.readFile(p, (err, fileContent) => {
//   //       if (err) {
//   //         cb([]);
//   //       } else if (fileContent.length) {
//   //         cb(JSON.parse(fileContent));
//   //       } else {
//   //         cb([]);
//   //       }
//   //     });
//   //   }
// };

const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
