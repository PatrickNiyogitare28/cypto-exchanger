import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import abi from 'src/app/utils/transaction.json';
import { ethers } from 'ethers';
@Injectable({
  providedIn: 'root'
})
export class CryptoWalletService {
  private ethereum;
  private CONTRACT_ADDRESS;
  private CONTRACT_ABI;
  constructor() {
    const {ethereum} = <any>window;
    this.ethereum = ethereum;
    this.CONTRACT_ADDRESS = environment.CONTRACT_ADDRESS;
    this.CONTRACT_ABI = abi.abi;
   }

  public connectWallet  = async () => {
    try{
      if(!this.ethereum) return alert("Please install meta mask");
      const accounts = await this.ethereum.request({method: 'eth_requestAccounts'});
      console.log(accounts);
    }
    catch(e){
      throw new Error("No ethereum object")
    }
  }

  public checkWalletConnection = async () => {
    try{
      if(!this.ethereum) return alert("Please install metamask");
      const accounts = await this.ethereum.request({method: 'eth_accounts'});
      return accounts;
    }
    catch(e){
      throw new Error("No ethereum object")
    }
  }

  private checkTransactionExists = async () => {
    try{
      const transactionContract: any = this.getEthereumContract();
      const transactionCount = await transactionContract.getTransactionCount();
      window.localStorage.setItem('transactionCount', transactionCount);
    }
    catch(e){
      throw new Error("No ethereum object");
    }
  }

  private getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(this.ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(this.CONTRACT_ADDRESS, this.CONTRACT_ABI, signer);
    return transactionContract;
  }


  public getAllTransactions = async (): Promise<Array<any>> => {
    try{
      if(!this.ethereum){
        alert("Please install meta mask");
        return [];
      }
      const transactionContract:any = this.getEthereumContract();
      const transactions = await transactionContract.getAllTransactions();
      console.log("Transactions ... "+JSON.stringify(transactions));
      return transactions;
    }
    catch(e){
      console.log(e);
      return [];
    } 
  }
}
