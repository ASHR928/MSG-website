const Exhibition = require("../models/exhibitionModel");
const cloudinary = require("cloudinary");

exports.addExhibition = async (req, res) => {
  try {
    const { title, brief, price, category, image } = req.body;

    if (!title || !brief || !price || !category || !image) {
      return res.status(400).json({
        message: "Please enter all fields",
      });
    }

    const result = await cloudinary.v2.uploader.upload(image, {
      folder: "exhibition",
    });

    const exhibition = await Exhibition.create({
      title,
      brief,
      price,
      category,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    res.status(201).json({
      exhibition,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.getExhibitions = async (req, res) => {
  try {
    const exhibitions = await Exhibition.find();

    res.status(200).json({
      exhibitions,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.removeExhibition = async (req, res) => {
  try {
    const { id } = req.params;

    const exhibition = await Exhibition.findById(id);
    if (!exhibition) {
      return res.status(404).json({
        message: "Exhibition not found",
      });
    }

    await cloudinary.v2.uploader.destroy(exhibition.image.public_id);

    await exhibition.remove();

    res.status(200).json({
      message: "Exhibition deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.updateExhibition = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, brief, price, category, image } = req.body;

    let exhibition = await Exhibition.findById(id);
    if (!exhibition) {
      return res.status(404).json({
        message: "Exhibition not found",
      });
    }

    let newImage = exhibition.image;
    if (image) {
      await cloudinary.v2.uploader.destroy(exhibition.image.public_id);
      const result = await cloudinary.v2.uploader.upload(image, {
        folder: "exhibition",
      });

      newImage = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }

    exhibition = await Exhibition.findByIdAndUpdate(
      id,
      {
        title,
        brief,
        price,
        category,
        image: newImage,
      },
      { new: true }
    );

    res.status(200).json({
      exhibition,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
