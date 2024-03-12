import "./App.css";
import Block from "./components/Block";
import { transactions } from "./data/data";
import buildMerkleTree from "./functions/buildMerkleTree";
import { useEffect } from "react";
import transformTransactions from "./functions/transformTransactions";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  let nonce = 0;

  function fetchData() {
    try {
      let hashes = transformTransactions(transactions, "1");
      // [1, tx1, 1, tx2, 1, tx3]
      // despues de la primer iteracion
      // [tx1Nounce1, tx2Nounce1, tx3Nounce1]

      const rootHash = buildMerkleTree(hashes, nonce);
      console.log("ROOT HASH", rootHash[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="App">
      Learn React
      <Block blockNumber="1" prevHash="2" />
    </div>
  );
}

export default App;
