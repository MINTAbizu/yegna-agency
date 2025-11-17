import physicalProduct from "../../model/digitalproducts/digital products.js"

export const addphyshicalProduct = async (req, res) => {
  try {
    const { productName, price, description, telegram, drive, dropbox, productLink } = req.body;

    if (!req.file) return res.status(400).json({ message: "Product image is required" });

    const image = `/uploads/digitalProducts/${req.file.filename}`; // store relative path

    const newProduct = new physicalProduct({
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

export const getAllphysicalProducts = async (req, res) => {
  try {
    const products = await physicalProduct.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
};
