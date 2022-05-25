import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/types/transaction';
import { CryptoWalletService } from 'src/app/services/crypto-wallet.service';
import { formatAddress } from 'src/app/utils/format-address';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  public transactions:Array<Transaction> = [];

  constructor(private readonly cryptoWalletService: CryptoWalletService) { }

  private getTransactions = async () => {
    const transactions: any = await this.cryptoWalletService.getAllTransactions();
    if(transactions.length < 1) return;
    transactions.forEach((transaction:any) => {
      const transactionObj: Transaction = {
        addressTo: formatAddress(transaction.receiver),
        addressFrom: transaction.sender,
        timeStamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / (10 ** 18)
      }
      this.transactions.push(transactionObj);
    });
  }
  ngOnInit(): void {
    this.getTransactions();
  }

}
