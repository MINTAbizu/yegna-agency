import Transaction from "../../model/TransactioModel/transaction.model.js";
import Account from "../../model/AccountModel/account.model.js";

// Buyer initiates purchase
export const createTransaction = async (req, res) => {
  try {
    const { accountId } = req.body;
    const account = await Account.findById(accountId);
    if (!account || account.status !== "available") {
      return res.status(400).json({ message: "Account not available" });
    }

    const commissionRate = 0.1; // 10% platform commission
    const commission = account.price * commissionRate;

    const transaction = new Transaction({
      buyerId: req.user.id,
      sellerId: account.sellerId,
      accountId,
      amount: account.price,
      commission,
      status: "pending",
    });

    await transaction.save();

    // Mark account as pending
    account.status = "pending";
    account.transactionId = transaction._id;
    await account.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Complete transaction (admin verifies)
export const completeTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: "Transaction not found" });

    transaction.status = "completed";
    await transaction.save();

    // Update account as sold
    const account = await Account.findById(transaction.accountId);
    account.status = "sold";
    await account.save();

    res.status(200).json({ transaction, account });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all transactions for a user
export const getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      $or: [{ buyerId: req.params.userId }, { sellerId: req.params.userId }]
    }).populate("accountId");
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
