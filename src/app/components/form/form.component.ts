import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Transaction } from 'src/app/types/transaction';;
import { CryptoWalletService } from 'src/app/services/crypto-wallet.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  loading: boolean = false;

  constructor(private readonly cryptoWalletService: CryptoWalletService) { }

  public form = {
     addressTo: {
       placeholder: 'Address to',
       value: ''
     },
     amount: {
       placeholder:'Amount (ETH)'
     },
     keyword: {
       placeholder: 'Keyword'
     },
     message: {
       placeholder: 'Enter message'
     }
  };

  addressTo: FormControl = new FormControl('');
  amount: FormControl = new FormControl('');
  keyword: FormControl = new FormControl('');
  message: FormControl = new FormControl('');

  @Output() triggerAlert: EventEmitter<string> = new EventEmitter();
  closeAlert(){
    this.triggerAlert.emit();
  }

  public onSubmit = () => {
    const data: Transaction  = {
      addressTo: this.addressTo.value,
      amount: this.amount.value,
      keyword: this.keyword.value,
      message: this.message.value
    }
    this.loading = true;
    const transaction = this.cryptoWalletService.sendTransaction(data)
    this.loading = false;
  }
  ngOnInit(): void {
  }

}
