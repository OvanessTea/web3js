import "dotenv/config";
import Web3 from "web3";
import { uniAbi } from "./abi";

const web3 = new Web3("https://eth.llamarpc.com");

const privateKey = process.env.PRIVATE_KEY;
const account = web3.eth.accounts.wallet.add(privateKey as string);

const uniAddress = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

const uniToken = new web3.eth.Contract(uniAbi, uniAddress);

uniToken.methods.totalSupply().call().then(console.log);

const to = "0x8E168442Da68EAA639789E4c076Fe02f6Ac9D5f1";
const value = web3.utils.toWei("0.001", "ether");

const tx = uniToken.methods.transfer(to, value).send({ from: account[0].address });
tx.then(console.log);



