import DigitalProduct from "../../model/digitalproducts/digital products.js"

export const addDigitalProduct = async (req, res) => {
  try {
    const { productName, price, description, telegram, drive, dropbox, productLink } = req.body;

    if (!req.file) return res.status(400).json({ message: "Product image is required" });

    const image = `/uploads/digitalProducts/${req.file.filename}`; // store relative path

    const newProduct = new DigitalProduct({
      productName,
      price,
      description,
      image,
      telegram,
      drive,
      dropbox,
      productLink,
    });

    await newProduct.save();

    res.status(201).json({ message: "Digital product added successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getAllDigitalProducts = async (req, res) => {
  try {
    const products = await DigitalProduct.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
};
