import Account from "../../model/AccountModel/account.model";

// Create new account (seller)
export const createAccount = async (req, res) => {
  try {
    const { platform, username, followers, price } = req.body;
    const account = new Account({
      sellerId: req.user.id,
      platform,
      username,
      followers,
      price,
    });
    await account.save();
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all available accounts
export const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ status: "available" });
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get single account by ID
export const getAccountById = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) return res.status(404).json({ message: "Account not found" });
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Mark account sold
export const markAccountSold = async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(
      req.params.id,
      { status: "sold", buyerId: req.body.buyerId, transactionId: req.body.transactionId },
      { new: true }
    );
    if (!account) return res.status(404).json({ message: "Account not found" });
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
