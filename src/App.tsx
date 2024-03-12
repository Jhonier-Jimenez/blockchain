import "./App.css";
import Block from "./components/Block";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h1" gutterBottom color="primary">
        Blockchain demo
      </Typography>
      <Block
        blockNumber="1"
        prevHash="0000000000000000000000000000000000000000000000000000000000000000
        "
        nonce={0}
        imageURL="https://pintu-academy.pintukripto.com/wp-content/uploads/2022/08/Perkembangan-blockchain-dari-masa-ke-masa.png"
        peerNumber="1"
      />
      <Block
        blockNumber="1"
        prevHash="0000000000000000000000000000000000000000000000000000000000000000
        "
        nonce={100000}
        imageURL="https://www.doubloin.com/wp-content/uploads/2023/06/reset-bitcoin-core-wallet.webp"
        peerNumber="2"
      />
      <Block
        blockNumber="1"
        prevHash="0000000000000000000000000000000000000000000000000000000000000000
        "
        nonce={1000000}
        imageURL="https://cryptwerk.com/upload/posts/5/e/8/5e8bd7f377998077242b67074cee9fdc.png"
        peerNumber="3"
      />
    </div>
  );
}

export default App;
