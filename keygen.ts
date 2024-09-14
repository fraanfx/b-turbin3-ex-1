import { Keypair } from "@solana/web3.js";

//Generate a new keypair
let kp = Keypair.generate();
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`You can fill it at https://faucet.solana.com`);
console.log(`[${kp.secretKey}]`);

// 6J5hJx5LmCzgNRWRsvreCTCoTtVg3m777QAzMqYDsnb3