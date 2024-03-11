import User from "./user";

interface Transaction {
  sender: User;
  adresse: User;
  amountToSend: number;
}

export default Transaction;
