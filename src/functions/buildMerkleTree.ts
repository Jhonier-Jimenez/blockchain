import mine from "./mine";

function buildMerkleTree(hashes:Array<string>) {

    if (hashes.length === 1) {
        return hashes[0];
      }
   
      let newBranch: Array<string> = []

      if(hashes.length % 2 == 0){
          for (let i = 0; i < hashes.length; i += 2) {
              let [hashA, hashB] = hashes;
              const hash = mine(hashA, hashB);
              newBranch.push(hash);
              hashes.splice(0, 2);
          }
          
          return buildMerkleTree(newBranch)
          
      }

}


export default buildMerkleTree;