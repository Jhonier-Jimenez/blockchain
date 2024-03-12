import Transaction from "../ts/interfaces/transaction";

function transformTransactions(
  transactions: Array<Transaction>,
  blockNumber: string
) {
  let stringIfiedArray = transactions.map((transaction) =>
    JSON.stringify(transaction)
  );

  let transactionsAndBlockPairs: string[] = [];

  stringIfiedArray.forEach((transactionArray) => {
    transactionsAndBlockPairs.push(blockNumber);
    transactionsAndBlockPairs.push(transactionArray);
  });

  return transactionsAndBlockPairs;
}

export default transformTransactions;
