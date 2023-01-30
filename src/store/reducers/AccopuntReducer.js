import { Keypair } from '@solana/web3.js';
import { accountTypes } from '../action_types/accountTypes';

const programSecretKeyString = '[...';
const programSecretKey = Uint8Array.from(JSON.parse(programSecretKeyString));
const programKeypair = Keypair.fromSecretKey(programSecretKey);

const initialState = {
  loading: false,
  isEror: false,
  errMsg: null,
  wallet: null,
  accoundId: '',
  programId: programKeypair.publicKey,
};

export function account(state = initialState, action) {
  switch (action.type) {
    case accountTypes.CREATE_REQUEST:
      return {
        ...state,
        isEror: false,
        errMsg: null,
        loading: true,
      };
    case accountTypes.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        wallet: action.payload.wallet,
        accoundId: action.paylaod.derivedAddress,
      };
    default:
      return state;
  }
}
