import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

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
    console.log(this.addressTo.value)
    console.log(this.amount.value)
    console.log(this.keyword.value)
    console.log(this.message.value)
  }
  ngOnInit(): void {
  }

}
