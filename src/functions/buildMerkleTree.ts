import mine from './mine';

function buildMerkleTree(hashes: Array<string>): Array<string> {
	if (hashes.length === 1) {
		return hashes;
	}

	let newBranch: Array<string> = [];
    let overflow: string = '';

    if (hashes.length % 2 === 1) {
        overflow = hashes.pop() as string;
        console.log('first overflow', overflow);
    }
    for (let i = 0; i < hashes.length; i += 2) {
        let [hashA, hashB] = [hashes[i], hashes[i+1]];
        console.log('hashA: ', hashA);
        console.log('hashB: ', hashB);

        const hash = mine(hashA, hashB);
        newBranch.push(hash);
    }
    if (overflow) {
        newBranch.push(overflow);
    }
    console.log('ADDED', newBranch);
    return buildMerkleTree(newBranch);
}

export default buildMerkleTree;