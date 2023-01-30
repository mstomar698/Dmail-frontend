import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { MailAccount } from '../models';

const connection = new Connection('http://localhost:8899');

export async function fetchData(accountId) {
  const accountInfo = await connection.getAccountInfo(accountId);

  return MailAccount.decode(accountInfo.data);
}

export async function send(mail, programId, wallet) {
  const encodedMail = mail.encode();
  const instruction = new TransactionInstruction({
    keys: [
      {
        pubkey: new PublicKey(mail.fromAddress),
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: new PublicKey(mail.toAddress),
        isSigner: false,
        isWritable: true,
      },
    ],
    programId,
    data: Buffer.from(Uint8Array.of(1, ...encodedMail)),
  });

  const transaction = new Transaction().add(instruction);

  let { blockhash } = await connection.getLatestBlockhash();
  // TODO: check wether recentBloackhash works or not.
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = wallet.publicKey;

  let signed = await wallet.signTransaction(transaction);
  let txid = await connection.sendRawTransaction(signed.serialize());

  // TODO: check for replacement of confirmTransaction by @deprecated — Instead, call confirmTransaction and pass in TransactionConfirmationStrategy
  await connection.confirmTransaction(txid);
}
