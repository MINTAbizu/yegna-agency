import Profile from "../../model/UserProfile/UserProfile.js"
import path from "path";
import fs from "fs";

export const createProfile = async (req, res) => {
  try {
    const { about, region, shopLocation, telegram, field } = req.body;

    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const profile = new Profile({
      user: req.user._id,
      about,
      region,
      shopLocation,
      telegram,
      field,
    });

    if (req.files?.avatar) {
      profile.avatar = req.files.avatar[0].path;
    }
    if (req.files?.backgroundImage) {
      profile.backgroundImage = req.files.backgroundImage[0].path;
    }

    await profile.save();
    res.status(201).json({ success: true, message: "Profile created successfully!", profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
