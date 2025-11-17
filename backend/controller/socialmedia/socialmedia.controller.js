import SocialAccount from "../models/SocialAccount.js";

// USER: Create a new social media account listing
export const createSocialAccount = async (req, res) => {
  try {
    const account = new SocialAccount({
      user: req.user.id, // taken from logged-in user
      platform: req.body.platform,
      accountName: req.body.accountName,
      price: req.body.price,
      description: req.body.description,
      link: req.body.link,
      image: req.file ? req.file.filename : null
    });

    await account.save();

    res.status(201).json({
      message: "Account submitted — pending admin approval",
      data: account,
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating account", error: err.message });
  }
};

// ADMIN: Approve listing
export const approveAccount = async (req, res) => {
  try {
    const account = await SocialAccount.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    if (!account) return res.status(404).json({ message: "Account not found" });

    res.json({ message: "Account approved", data: account });
  } catch (err) {
    res.status(500).json({ message: "Error approving account", error: err.message });
  }
};

// ADMIN: Reject listing
export const rejectAccount = async (req, res) => {
  try {
    const account = await SocialAccount.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );

    if (!account) return res.status(404).json({ message: "Account not found" });

    res.json({ message: "Account rejected", data: account });
  } catch (err) {
    res.status(500).json({ message: "Error rejecting account", error: err.message });
  }
};

// PUBLIC: Show only approved accounts
export const getApprovedAccounts = async (req, res) => {
  try {
    const accounts = await SocialAccount.find({ status: "approved" }).sort({ createdAt: -1 });
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching accounts" });
  }
};

// ADMIN: Show only pending accounts
export const getPendingAccounts = async (req, res) => {
  try {
    const accounts = await SocialAccount.find({ status: "pending" }).sort({ createdAt: -1 });
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching accounts" });
  }
};
