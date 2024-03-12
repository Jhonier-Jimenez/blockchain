import mine from './mine';

interface MerkleTreeResult {
    rootHash: Array<string>;
    branches: Array<Array<string>>;
}

function buildMerkleTree(hashes: Array<string>, nonce:number): MerkleTreeResult {
	if (hashes.length === 1) {
		return { rootHash: hashes, branches: [] };
	}

    let branches: Array<Array<string>> = [];
	let newBranch: Array<string> = [];
    let overflow: string = '';

    if (hashes.length % 2 === 1) {
        overflow = hashes.pop() as string;
    }
    for (let i = 0; i < hashes.length; i += 2) {
        let [hashA, hashB] = [hashes[i], hashes[i+1]];

        const hash = mine(hashA, nonce, hashB);
        newBranch.push(hash);
    }
    if (overflow) {
        newBranch.push(overflow);
    }
    
    console.log('ADDED', newBranch);
    branches.push(newBranch)
    const { rootHash, branches: childBranches } = buildMerkleTree(newBranch, nonce);
    branches = branches.concat(childBranches);

    return { rootHash, branches };
}

export default buildMerkleTree;