import Transaction from "../../model/TransactioModel/transaction.model.js";
import Account from "../../model/AccountModel/account.model.js";

// Create a new transaction (buyer initiates purchase)
export const createTransaction = async (req, res) => {
  try {
    const { accountId, amount } = req.body;

    const account = await Account.findById(accountId);
    if (!account) return res.status(404).json({ message: "Account not found" });
    if (account.status !== "available") return res.status(400).json({ message: "Account not available" });

    const transaction = new Transaction({
      buyerId: req.user.id,
      sellerId: account.sellerId,
      accountId,
      amount,
      status: "pending",
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Mark transaction as completed and update account
export const completeTransaction = async (req, res) => {
  try {
    const { transactionId } = req.params;

    const transaction = await Transaction.findById(transactionId);
    if (!transaction) return res.status(404).json({ message: "Transaction not found" });

    transaction.status = "completed";
    await transaction.save();

    const account = await Account.findById(transaction.accountId);
    account.status = "sold";
    account.buyerId = transaction.buyerId;
    await account.save();

    res.status(200).json({ transaction, account });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all transactions for a user (buyer or seller)
export const getUserTransactions = async (req, res) => {
  try {
    const userId = req.user.id;
    const transactions = await Transaction.find({
      $or: [{ buyerId: userId }, { sellerId: userId }],
    })
      .populate("buyerId", "name email")
      .populate("sellerId", "name email")
      .populate("accountId", "platform username price");

    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Add this missing function
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId)
      .populate("buyerId", "name email")
      .populate("sellerId", "name email")
      .populate("accountId", "platform username price");

    if (!transaction) return res.status(404).json({ message: "Transaction not found" });

    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
