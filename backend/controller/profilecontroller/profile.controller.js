import Profile from "../../model/UserProfile/UserProfile.js";

// User submits profile


// User submits profile
export const createProfile = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    // Check if the user already has a profile
    const existingProfile = await Profile.findOne({ user: req.user._id });
    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: "You have already created a profile!",
        profile: existingProfile
      });
    }

    const { about, region, shopLocation, telegram, field } = req.body;

    const profile = new Profile({
      user: req.user._id,
      about,
      region,
      shopLocation,
      telegram,
      field,
    });

    if (req.files?.avatar) profile.avatar = req.files.avatar[0].path;
    if (req.files?.backgroundImage) profile.backgroundImage = req.files.backgroundImage[0].path;

    await profile.save();
    res.status(201).json({
      success: true,
      message: "Profile created successfully!",
      profile
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



// Public: Get all approved profiles
export const getApprovedProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({ status: "approved" }).populate("user", "name");
    res.status(200).json(profiles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// profile.controller.js


// Approve or Reject Profile
// export const updateProfileStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body; // "Approved" or "Rejected"

//     if (!["Approved", "Rejected"].includes(status)) {
//       return res.status(400).json({ message: "Invalid status" });
//     }

//     const profile = await Profile.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     ).populate("user", "name email");

//     if (!profile) return res.status(404).json({ message: "Profile not found" });

//     res.status(200).json({ message: `Profile ${status.toLowerCase()} successfully`, profile });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error });
//   }
// };



// PATCH /api/profile/:id/status
export const updateProfileStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const profile = await Profile.findById(req.params.id);

    if (!profile) return res.status(404).json({ message: "Profile not found" });

    profile.status = status; // approved or rejected
    await profile.save();

    res.status(200).json({ message: "Profile status updated", profile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// GET all profiles
export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", "name email");
    res.status(200).json(profiles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

