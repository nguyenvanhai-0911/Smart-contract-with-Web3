// const Web3 = require('web3');

// const customProvider = {
//     sendAsync: (payload, cb) => {
//         console.log('You call');
//         console.log(payload);
//         cb(undefined, 100);
//     }
// };

// // const provider = new Web3.providers.HttpProvider('http://localhost:8545');

// const web3 = new Web3 (customProvider);

// // connected to the blockchain 

// web3.eth.getBlockNumber().then(()=> console.log('Done!'));

const Web3 = require('web3');

const MyContract = require('./build/contracts/MyContract.json');

const init = async () => {
    const web3 = new Web3('http://localhost:9545');

    //const id = '1626858683878';

    const id = await web3.eth.net.getId();
    // console.log(id);

    const deployedNetwork = MyContract.networks[id];
    // console.log(deployedNetwork);

    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address,
    );
    //console.log(contract);

    const addresses = await web3.eth.getAccounts();

    const receipt = await contract.methods.emitEvent('Hey! I want to send Ether.').send({
        from: addresses[0],
    });

    console.log(receipt.events);

    // await contract.methods.sendEther().send({
    //     from: addresses[0],
    //     value: '100000',
    // });

    // console.log(await contract.methods.functionCalled().call());

    // await web3.eth.sendTransaction({
    //     from: addresses[0],
    //     to: contract.options.address,
    //     value: '100000',
    // });
     
    // console.log(await contract.methods.functionCalled().call());

    // await web3.eth.sendTransaction({
    //     from: addresses[0],
    //     to: addresses[1],
    //     value: '10000',
    // });

    // contract.methods.setData(10).send({
    //     from: addresses[0],
    // })
        // .on('receipt', receipt => {
        
        // })
        // .on('confirmation', (confirmationNumber, receipt) => {

        // })
        // .on('error', (error, receipt) => {

        // })
    //console.log(receipt);

    // const result = await contract.methods.getData().call()
    // console.log(result);
}

init(); 
