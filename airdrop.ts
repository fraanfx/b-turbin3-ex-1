import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
import wallet from "./dev-wallet.json"


const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection to devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        // We're going to claim devnet SOL tokens
        const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
        console.log(`Success! Check out your TX here: 
        https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();


//Success! Check out your TX here: https://explorer.solana.com/tx/3Xxi2A9miULvu84PRqovvFbUZKqbCt2JK6YbT4HkohXBiv7FigFpmgqJpD3pY8PfdeQU8vNWxw1TqDy9S1REMcS1?cluster=devnet