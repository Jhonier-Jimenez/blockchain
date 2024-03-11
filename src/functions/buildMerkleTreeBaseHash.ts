import Transaction from "../ts/interfaces/transaction";
import mine from "./mine";

function buildMerkleTreeBaseHash(
  transactions: Array<Transaction>,
  blockNumber: string
) {
  const baseHashes = transactions.map((transaction, index) => {
    const transactionString = JSON.stringify(transaction);
    console.log("EMPEZANDO CON: ", index);
    const hash = mine(blockNumber, transactionString);
    console.log("HASH: ", index, "  ", hash);
    return Promise.resolve(hash);
  });
  return baseHashes;
}

export default buildMerkleTreeBaseHash;
