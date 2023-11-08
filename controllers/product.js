const Product = require("../Models/product");

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    //หา _id ด้วย id
    const idProduct = await Product.findOne({ _id: id }).exec();

    res.send(idProduct);
  } catch (err) {
    console.log("read error");
    res.status(500).send("Server Error Read ID");
  }
};

exports.list = async (req, res) => {
  try {
    const listProducts = await Product.find({}).exec();

    res.send(listProducts);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);

    const createProduct = await Product(req.body).save();
    res.send(createProduct);
  } catch (error) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    //ค้นหา _id ด้วย id , ข้อมูลที่ส่งมา(ข้อมูลใหม่ที่ต้องการอัพเดต), new update created update ด้วยนะ
    const updated = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    //ส่งไปให้หน้าบ้าน
    console.log(updated);
    res.send(updated);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    Product.findByIdAndDelete(id).then(() => {
      if (res) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Not found" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};
