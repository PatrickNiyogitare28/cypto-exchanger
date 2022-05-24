import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoWalletService {
  private ethereum;
  constructor() {
    const {ethereum} = <any>window;
    this.ethereum = ethereum;
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
}
