import "./App.css";
import Block from "./components/Block";
import { transactions } from "./data/data";
import buildMerkleTreeBase from "./functions/buildMerkleTreeBaseHash";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

   function fetchData() {
    try {
      console.log("BUILDING TREE");
      
      const merkleTreeBase =  buildMerkleTreeBase(transactions, "1");
      console.log("MERKLE BASE", merkleTreeBase);

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
