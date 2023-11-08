const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    detail: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

//(table name, parameterSchema)
module.exports = mongoose.model("products", productSchema);
