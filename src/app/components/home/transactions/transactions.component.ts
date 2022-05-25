import { Component, OnInit } from '@angular/core';
import { CryptoWalletService } from 'src/app/services/crypto-wallet.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  public transactions = [];

  constructor(private readonly cryptoWalletService: CryptoWalletService) { }

  private getTransactions = async () => {
    const transactions: any = await this.cryptoWalletService.getAllTransactions();
    if(transactions.length < 1) return;
    this.transactions = transactions || [];

  }
  ngOnInit(): void {
    this.getTransactions();
  }

}
