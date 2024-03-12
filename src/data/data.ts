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

const testHash: Array<string> = [
  '000056b1d139550abba95b22c0a3d421e360429d1936a73063e77062789f7abf',
  '00001d207f2c8170d47e270cab96a03eafdc0b049aff588f4a7856744a21fc43',
  '00006beeee92ca58de622d07ebd665f866e6fa89cbb6f1672fc3cded7f146289'
]

export { users, transactions, testHash };
