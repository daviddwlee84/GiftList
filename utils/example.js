const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();

console.log('Root:', root);

// find the proof that norman block is in the list 
const name = 'Norman Block';
const index = niceList.findIndex(n => n === name);
const proof = merkleTree.getProof(index);

console.log('Proof:', proof);

// verify proof against the Merkle Root
console.log(verifyProof(proof, name, root)); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?
const name_not_exist = 'Da-Wei Lee';
const index_not_exist = niceList.findIndex(n => n === name_not_exist);
const proof_not_exist = merkleTree.getProof(index_not_exist);
console.log(verifyProof(proof_not_exist, name_not_exist, root)); // false
