/**
 * Importing the Block class
 */
//
const BlockClass = require('./src/block.js');
const BlockChainClass = require('./src/blockchain');

/**
 * Creating a block object
 */
let block = new BlockClass.Block({data: 'Genesis Block'});

let blockchain = new BlockChainClass.Blockchain();

blockchain._addBlock(block).then((result) =>{
   console.log(JSON.stringify(result)); 
});

console.log(blockchain.getChainHeight());

// Generating the block hash
block.validate().then((result) => {
        console.log(`Validation Success!`);
}).catch((error) => {console.log(error)});
