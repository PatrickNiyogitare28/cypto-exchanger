import { Component, OnInit } from '@angular/core';
import { CryptoWalletService } from 'src/app/services/crypto-wallet.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public account: string | false = false;
  public showModal: boolean = false;

  constructor(private readonly cryptoWalletService: CryptoWalletService) { }

  public onConnectWallet = () => {
    this.cryptoWalletService.connectWallet();
  }

  public getEthereumAccounts = async () => {
    const accounts = await this.cryptoWalletService.checkWalletConnection();
    console.log("acccounts available "+JSON.stringify(accounts));
    if(accounts.length < 1) return;
    this.account = accounts[0];
  }

  public onShowModal = async () => {
    this.showModal = !(this.showModal);
  }

  public getTransactions = async () => {
    this.cryptoWalletService.getAllTransactions();
  }

  ngOnInit(): void {
    this.getEthereumAccounts();
    this.getTransactions();
  }

}
