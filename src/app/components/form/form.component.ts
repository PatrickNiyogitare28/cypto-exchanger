import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  public form = {
     addressTo: {
       placeholder: 'Address to'
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

  @Output() triggerAlert: EventEmitter<string> = new EventEmitter();
  closeAlert(){
    this.triggerAlert.emit();
  }

  ngOnInit(): void {
  }

}
