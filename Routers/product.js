const express = require("express");

const router = express.Router();
const {
  read,
  list,
  update,
  create,
  remove,
} = require("../controllers/product");


//http://localhost:5050/api/products
router.get("/products/:id", read);
router.get("/products", list);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

module.exports = router;

