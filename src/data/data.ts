import User from "../ts/interfaces/user";
import Transaction from "../ts/interfaces/transaction";

const user1: User = {
    name: "John",
    coins: 100
  };
  
  const user2: User = {
    name: "Alice",
    coins: 200
  };
  
  const user3: User = {
    name: "Bob",
    coins: 150
  };

const users: Array<User> = [user1, user2, user3];

const transaction1: Transaction = {
    sender: user1,
    adresse: user2,
    amountToSend: 50
  };
  
  const transaction2: Transaction = {
    sender: user3,
    adresse: user1,
    amountToSend: 30
  };
  
  const transaction3: Transaction = {
    sender: user2,
    adresse: user3,
    amountToSend: 20
  };

const transactions: Array<Transaction> = [transaction1, transaction2, transaction3];

export { users, transactions };
